class TableGenerator {
  constructor(tableParams) {
    this.table = document.createElement("table");
    this.thead = this.table.createTHead();
    this.tbody = this.table.createTBody();
    this.insertNode = tableParams.insert || document.body;
    this.tableData = tableParams.data || [];
    this.cols = tableParams.cols || {};

    this.init();
  }

  generateTHead() {
    const row = this.thead.insertRow();

    Object.keys(this.cols).forEach((item) => {
      const cell = row.insertCell();
      cell.dataset.name = item;
      cell.textContent = this.cols[item];
      this.onCLickHeadCell(cell);
    });
  }

  generateTBody(data) {
    data.forEach((item, index) => {
      const row = this.tbody.insertRow();
      Object.keys(this.cols).forEach((value) => {
        const cell = row.insertCell();

        if (value.includes("#")) {
          cell.textContent = index;
        } else {
          cell.textContent = item[value];
        }
      });
    });
  }

  sortByHeadCell(cellName, sortType = true) {
    return this.tableData.sort((a, b) => {
      // console.log(a[cellName], b[cellName]);
      return sortType ? a[cellName] - b[cellName] : b[cellName] - a[cellName];
    });
  }

  onCLickHeadCell(node) {
    node.addEventListener("click", () => {
      const newData = this.sortByHeadCell(node.dataset.name, false);
      console.log(newData[0].id);
      // this.tbody.innerHTML = "";
      // this.generateTBody(newData);
    });
  }

  init() {
    this.generateTHead();
    this.generateTBody(this.tableData);
    this.insertNode.append(this.table);
  }
}

const tableData = [
  {
    id: 1,
    first_name: "Gideon",
    last_name: "Vondrys",
    email: "gvondrys0@youtu.be",
    gender: "Male",
    ip_address: "63.10.47.150"
  },
  {
    id: 2,
    first_name: "Ethelbert",
    last_name: "McPheat",
    email: "emcpheat1@marriott.com",
    gender: "Male",
    ip_address: "106.194.65.102"
  },
  {
    id: 3,
    first_name: "Eberto",
    last_name: "Maddin",
    email: "emaddin2@so-net.ne.jp",
    gender: "Male",
    ip_address: "108.206.76.236"
  },
  {
    id: 4,
    first_name: "Jarvis",
    last_name: "Ebanks",
    email: "jebanks3@bizjournals.com",
    gender: "Male",
    ip_address: "231.126.170.64"
  },
  {
    id: 5,
    first_name: "Lelah",
    last_name: "Prosek",
    email: "lprosek4@google.com.hk",
    gender: "Female",
    ip_address: "250.176.39.143"
  },
  {
    id: 6,
    first_name: "Witty",
    last_name: "Ashe",
    email: "washe5@addtoany.com",
    gender: "Male",
    ip_address: "65.86.2.14"
  },
  {
    id: 7,
    first_name: "Carmine",
    last_name: "Brownlow",
    email: "cbrownlow6@fda.gov",
    gender: "Male",
    ip_address: "127.250.82.41"
  },
  {
    id: 8,
    first_name: "Shawnee",
    last_name: "Rohloff",
    email: "srohloff7@typepad.com",
    gender: "Female",
    ip_address: "174.203.240.73"
  },
  {
    id: 9,
    first_name: "Valerye",
    last_name: "Beals",
    email: "vbeals8@cbsnews.com",
    gender: "Female",
    ip_address: "98.145.61.82"
  },
  {
    id: 10,
    first_name: "Mufinella",
    last_name: "Platt",
    email: "mplatt9@techcrunch.com",
    gender: "Female",
    ip_address: "33.219.167.131"
  }
];

new TableGenerator({
  insert: document.body,
  data: tableData,
  cols: {
    id: "№",
    first_name: "First Name",
    last_name: "Last Name",
    email: "Email",
    gender: "Gender",
    ip_address: "IP"
  },
  tableClass: "table",
  tableAttr: {
    border: 1
  }
});
