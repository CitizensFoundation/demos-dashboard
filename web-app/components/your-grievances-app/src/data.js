
const createRandomData = (length) => {
  return new Array(length).fill().map((a, i) =>  Math.round( Math.random()*(Math.random()*10) * 10 ) / 10).sort();
}

export const DataLabels = [
  "03/2014", "04/2014","07/2014","08/2014","09/2014","10/2014","11/2014","12/2014",
  "01/2015", "02/2015","03/2015", "04/2015","05/2015","06/2015","07/2015","08/2015","09/2015","10/2015","11/2015","12/2015",
  "01/2016", "02/2016","03/2016", "04/2016","05/2016","06/2016","07/2016","08/2016","09/2016","10/2016","11/2016","12/2016",
  "01/2017", "02/2017","03/2017", "04/2017","05/2017","06/2017","07/2017","08/2017","09/2017","10/2017","11/2017","12/2017",
  "01/2018", "02/2018","03/2018", "04/2018","05/2018","06/2018","07/2018","08/2018","09/2018","10/2018","11/2018","12/2018",
  "01/2019", "02/2019","03/2019", "04/2019","05/2019","06/2019","07/2019","08/2019","09/2019","10/2019","11/2019","12/2019"
]

export const Data = [
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Liberal Societies",
    topicName: "Liberal Societies",
    description: `Sub topcis: Homosexuality, Perverted Youth, Fascist Liberalism, End of Liberalism, Deficiancies of Liberalism, Historic Liberalism, Failed Democracy, Problems of Democracy,
      Weaknes of democracic institutions, NGO agents, NGOs funding, People's needs, Decline, Moral`,
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Liberal Societies",
      borderColor: "#3e95cd",
      fill: false
    }
  },
  {
    title: "Western Leaders",
    topicName: "Western Leaders",
    description: `Sub topics: Weakness, Ineffectiveness, Corruption, Russian control, Anti-national government,
      Anti-national, Detached from people, Homosexuality, Lack of sovereignity, Directed by others, Double standards Against own country`,
    dataSet: {
      borderColor: "#0584a8",
    }
  },
  {
    title: "Institutions of the West",
    topicName: "Institutions of the West",
    description: `Sub topics: Fascist USA, USA exploiting, USA aggresor, USA decline, Putin Trump, USA politics, Nuclear War, USA democracy, Degenerating West, EU decline I, EU Bueraucracy,
    EU budget, EU extravagance, EU imposing, EU homosexual, EU USA, EU decrease, EU Soviet, EU project, EU leaders, EU children, EU crops, EU lifestyle, NATO aggresive, NATO terror, NATO geopolitics,
    NATO arms race, NATO Russia, NATO budget, NATO colonial power, NATO legitimacy, NATO enlargement, NATO 1989`,
    dataSet: {
      borderColor: "#551498",
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Geopolitics",
    topicName: "Geopolitics",
    description: `Sub topics: Disadvantaged People, New World Order, Religion, Conservatism, Peace, Power, Europe, Statehood, NATO, Vicitm, Euroasia, Multipolar world, Arsenal, Counterweight, Black sea, Fascism, Third World War, Indepence, History of cirmea, Decline of crimea, Oppression of russians in crimea, Referendum crimea, Return home of crimea, Ukraine, Kosovo comparison of crimea, Sanctions not needed, Sanctions harm west, Sanctions do not impact RU, Remove sanctions, Sanctions do nto work, Dialogue needed, Sanctions help RU, Balance to west in Middle East, Support Syrian government, Origins of Syrian war, ISIS, Geopolitical power in Middle east,
      Save Christians in Middle East, Stabilisation in Middle East, Mirgration to Europe`,
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Geopolitics",
      borderColor: "#3cba9f",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "Elections",
    topicName: "Elections",
    description: `Sub topics: Intervention of west, Denial of election meddling, Used to weaken Russia, Justification,
      Western Propaganda, Western hybrid war, Russian answer to west
    `,
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Elections",
      borderColor: "#c45850",
      fill: false
    }
  },
  {
    currrentCount: createRandomData(DataLabels.length)[0],
    title: "RU Leaders",
    topicName: "RU Leaders",
    description: `Sub topics: Popular, Revivial, Qualities, History, Success, Christian values, Positive attributes, Geopolitics, Smart, Strong state, National
    `,
    dataSet: {
      data: createRandomData(DataLabels.length),
      label: "Evolving Social Mores",
      borderColor: "#e8c309",
      fill: false
    }
  }
]