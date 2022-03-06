import { html, css, LitElement } from 'lit-element';
import { Data } from '../../your-grievances-app/src/data.js';
import { ShadowStyles } from '../../your-grievances-app/src/shadow-styles.js';

import './Grievance.js';
import { BaseElement } from '../../your-grievances-app/src/baseElement.js';

export class ListOfGrievances extends BaseElement {
  static get styles() {
    return [
      ShadowStyles,
      css`
        :host {
          --page-one-text-color: #000;

          padding: 25px;
          color: var(--page-one-text-color);
        }

        .mdc-card {
          max-width: 850px;
          padding: 16px;
          background-color: #fff;
          margin-bottom: 32px;
        }
        .content {
          padding: 1rem;
        }
        .subtext {
          color: rgba(0, 0, 0, 0.54);
        }

        .group-spaced {
          justify-content: space-around;
        }

        .group-spaced > * {
          margin: 0 8px;
        }

        .container {
          display: flex;
          flex-direction: column;
          flex-basis: auto;
          width: 100%;
        }

        .contentText {
          font-size: 16px !important;
        }

        .contentTitle {
          font-size: 20px;
          margin-top: 0;
        }

        a {
          color: rgba(0, 0, 0, 0.54);
        }

        .readMore {
          color: #555;
        }
      `,
    ];
  }

  static get properties() {
    return {};
  }

  constructor() {
    super();
  }

  renderIntro() {
    return html`
      <div class="mdc-card shadow-animation shadow-elevation-3dp" @click="${this._openGrievance}">
        <div class="mdc-card__primary-action">
          <div class="mdc-card__media mdc-card__media--16-9 my-media"></div>
          <div class="content">
            <h2 class="mdc-typography--title contentTitle">Introduction to the DEMOS Dashboard</h2>
            <div class="mdc-typography--body1 subtext contentText">
              <p>The DEMOS Dashboard allows us to reveal relative trends between different topics regarding Russian propoganda in
                English (70%), German (13%), Italian (13%), Polish (3%) & Hungarian (1%). The CommonCrawl web archive is used, granting us the ability to scan web crawls from
                every year from 2013 to the present. We developed search criteria targeting thousands of keywords.</p>
              <p>
              <p>The DEMOS Dashboard is a part of the Horizon 2020 funded
              <a href="https://demos-h2020.eu/en" target="_blank"
                >DEMOS project</a
              ></p>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  renderCitizensEngagment() {
    return html``;
  }

  render() {
    return html`
      <div class="container">
        ${this.renderIntro()}
        ${Data.map(item =>
          item.topic == 'Citizen engagment'
            ? html`
                ${this.renderCitizensEngagment()}
                <one-grievance .grievanceData="${item}"></one-grievance>
              `
            : html`
                <one-grievance .grievanceData="${item}"></one-grievance>
              `,
        )}
      </div>
    `;
  }
}