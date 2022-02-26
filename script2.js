// factory to use various static data

//MVC code starts from here
class Model {
  constructor() {
    this.configData = {
      sectionMain: [
        "Basic",
        "Objective",
        "Education",
        "Experience",
        "Skills",
        "Awards",
      ],
      sectionFields: {
        Basic: ["name", "location", "contact", "email", "linkedin"],
        Objective: ["objective"],
        Education: ["degree", "institute", "termEd", "grade"],
        Experience: ["designation", "company", "termEx", "workEx"],
        Skills: ["skills"],
        Awards: ["awards"],
      },

      sectionDetails: {
        Basic: [
          [
            "Ashmika Jain",
            "Bangalore",
            "9669612855",
            "jainashmika.1906@gmail.com",
            "https://in.linkedin.com/in/ashmika-jain-b65590128",
          ],
        ],
        Objective: [
          [
            "Inovative, task driven profesional with 2 years of experience" +
              "working in corporate and solving business problems. Catering to the" +
              "technical needs of industry through ingenious innnovation." +
              "Proficient in creating databases, eriting & testing codes, debugging" +
              "and implementing optimized solution to a problem. Working in" +
              "completely agile environment.",
          ],
        ],

        Education: [
          [
            "Bachelors of Engineering-Information and Technology",
            "SATI,Vidisha",
            "2015-2019",
            "8.9",
          ],
          [
            "XII-Science",
            "Tara Sadan Sr. Sec. School,Ashok Nagar",
            "2014-2015",
            "86",
          ],
        ],

        Experience: [
          [
            "Software Engineer",
            "Tata Consultancy Services",
            "2019-2021",
            "Creating new reports as per client requirement & Providing SQL Support" +
              "for the RRP app." +
              "Working on Enhancements in SSIS packages as per client" +
              "requirements." +
              "Working on Enhancements in SSIS packages as per client requirements" +
              "Creating reports templates in SSRS. Deployment of SSIS Packages," +
              " Databases, Stored Procedure & Bug Fixes Through TFS/GITHUB." +
              " Mentored new associates who joined the team along with various KT " +
              "sessions.Handled IT Risk activities for the projects.",
          ],
        ],

        Skills: [
          ["python"],
          ["mySql"],
          ["SSIS(ETL)"],
          ["DSA"],
          ["Java"],
          ["Service-Now"],
          ["SSRS"],
          ["TFS & GITHUB"],
        ],

        Awards: [
          ["Awarded star of the month(May2021)-TCS"],
          ["Awarded on the spot award-TCS"],
          ["Organized various team events"],
        ],
      },
      startIndexView: {
        Basic: 0,
        Objective: 0,
        Education: 0,
        Experience: 0,
        Skills: 0,
        Awards: 0,
      },
      startIndexForm: {
        Basic: 0,
        Objective: 0,
        Education: 0,
        Experience: 0,
        Skills: 0,
        Awards: 0,
      },

      Images: {
        Basic: 0,
        Objective: "img/objective.png",
        Education: "img/ed.png",
        Experience: "img/ex.png",
        Skills: "img/skil.png",
        Awards: "img/aw.png",
      },
      sectionFieldsAdd: {
        Basic: [],
        Objective: [],
        Education: [[1, 2, 3, 4]],
        Experience: [[1, 2, 3, 4]],
        Skills: [[1]],
        Awards: [[1]],
      },
    };
  }

  bindShowProjectSection(callback) {
    this.onshowProjectSection = callback;
  }

  bindDisplayValues(callback) {
    this.displayValues = callback;
  }

  confirmButton() {
    var collection = document.getElementsByTagName("input");
    Array.from(collection).forEach(function (element) {
      const a = document.getElementById(element.id.replace("form", ""));
      const b = document.getElementById(element.id).value;
      a.innerHTML = b;
    });
  }

  resetButton() {
    var fields = document.getElementsByTagName("input");
    Array.from(fields).forEach(function (element) {
      const c = document.getElementById(element.id.replace("form", ""));
      const d = document.getElementById(element.id);

      d.value = c.textContent.replace(/\s+/g, " ");
    });
  }

  removeButton(e) {
    var ele2 = e.replace("inner", "innerview");
    // console.log(e, ele2);
    document.querySelectorAll("#" + e).forEach(el => el.remove());
    document.querySelectorAll("#" + ele2).forEach(el => el.remove());
  }
  confirmButtonNewFields(id) {
    var newFields = document.getElementsByClassName(id);
    var arr = [];
    Array.from(newFields).forEach(function (element) {
      element.forEach(function (elementary) {
        console.log(elementary);
      });
    });
  }
}

//view code

class View {
  constructor() {
    this.app = this.getElement("#root");
    this.resumeForm = this.getElement("#resumeForm");
    this.inputContainer = this.createElement("div", "formView", "formId");
    this.addButton = this.createElement("button", "addButton", "buttonAdd");
    this.addButton.append(document.createTextNode("+"));
    this.resumeForm.append(this.inputContainer, this.addButton);
    this.app.append(this.resumeForm);
    this.resumeView = this.getElement("#resumeView");
    this.nameContainer = this.createElement("div", "basicView");
    this.resumeView.append(this.nameContainer);
    this.app.append(this.resumeView);
  }

  createElement(tag, className, id = null, value = null) {
    const element = document.createElement(tag);
    if (className) element.classList.add(className);
    if (id != null) element.id = id;
    if (value != null) element.value = value;

    return element;
  }

  getElement(selector) {
    const element = document.querySelector(selector);
    return element;
  }

  bindConfirmButton(handle) {
    this.inputContainer.addEventListener("click", event => {
      if (event.target.className === "confirmForm") {
        handle();
      }
    });
  }

  bindResetButton(handle) {
    this.inputContainer.addEventListener("click", event => {
      if (event.target.className === "resetFields") {
        handle();
      }
    });
  }

  bindRemoveButton(handle) {
    var select = this.getElement(".selectBox");
    this.inputContainer.addEventListener("click", event => {
      if (event.target.className === "removeFields") {
        if (select.value == "Basic" || select.value == "Objective") {
          alert("you cant remove these fields");
        } else {
          const id = event.target.parentElement.id;
          handle(id);
        }
      }
    });
  }

  bindConfirmButtonNewFields(handle) {
    this.inputContainer.addEventListener("click", event => {
      if (event.target.className === "confirmFormNew") {
        const id = event.target.parentElement.className;
        handle(id);
      }
    });
  }

  showProjectSection(configData) {
    ///this is for the select box
    var this1 = this;
    var select = this1.createElement("select", "selectBox", "selectbox");
    var sectionNames = configData.sectionMain;
    var fields = configData.sectionFields;
    var sectionDeatils = configData.sectionDetails;
    var startIndexView = configData.startIndexView;
    var startIndexForm = configData.startIndexForm;
    var img = configData.Images;
    var x = "Basic";

    select.onchange = function () {
      var newCategory = select.value;
      document.getElementById(newCategory).style.display = "block";
      document.getElementById(x).style.display = "none";
      x = newCategory;
    };
    sectionNames.forEach(function (sectionname) {
      var option = document.createElement("option");
      option.append(document.createTextNode(sectionname));
      select.appendChild(option);
      option.value = sectionname;
    });
    this1.inputContainer.appendChild(select);

    ///this is for the forms & input fields

    sectionNames.forEach(function (sectionName) {
      var div = this1.createElement("div", sectionName, sectionName);
      this1.inputContainer.append(div);
      sectionDeatils[sectionName].forEach(function (rows) {
        var div2 = this1.createElement(
          "div",
          sectionName + "new" + startIndexForm[sectionName],
          sectionName + "inner" + startIndexForm[sectionName]
        );
        rows.forEach(function (column, index) {
          var label = this1.createElement("label");
          label.appendChild(
            document.createTextNode(fields[sectionName][index])
          );
          var p = this1.createElement(
            "input",
            fields[sectionName][index] + "form",
            fields[sectionName][index] + "form" + startIndexForm[sectionName]
          );

          p.appendChild(document.createTextNode(column));
          div2.append(label, p);
        });

        var but = this1.createElement("Button", "confirmForm");
        but.append(document.createTextNode("confirm"));

        div2.appendChild(but);
        var res = this1.createElement("Button", "resetFields");
        res.append(document.createTextNode("Reset"));

        div2.appendChild(res);
        var rem = this1.createElement("Button", "removeFields");
        rem.append(document.createTextNode(" X "));

        div2.appendChild(rem);
        div.appendChild(div2);
        this1.inputContainer.append(div);
        startIndexForm[sectionName]++;
      });
    });

    ///this is how resume is lookin

    sectionNames.forEach(function (sectionName) {
      var div = this1.createElement("div", sectionName + "View");
      var h2 = this1.createElement("h3");
      var img1 = this1.createElement("img");
      img1.src = img[sectionName];
      img1.height = "21";
      img1.width = "21";
      h2.appendChild(document.createTextNode(sectionName));
      if (sectionName !== "Basic") this1.nameContainer.append(img1, h2);
      sectionDeatils[sectionName].forEach(function (rows) {
        var div2 = this1.createElement(
          "div",
          sectionName + "newView" + startIndexView[sectionName],
          sectionName + "innerview" + startIndexView[sectionName]
        );
        rows.forEach(function (column, index) {
          var p = this1.createElement(
            "p",
            fields[sectionName][index],
            fields[sectionName][index] + startIndexView[sectionName]
          );
          p.appendChild(document.createTextNode(column));
          div2.appendChild(p);
        });
        div.appendChild(div2);
        this1.nameContainer.append(div);
        startIndexView[sectionName]++;
      });
    });
  }
  ////this is reset and initial values input
  showDefaultValues() {
    var fields = document.getElementsByTagName("input");
    Array.from(fields).forEach(function (element) {
      const c = document.getElementById(element.id.replace("form", ""));
      const d = document.getElementById(element.id);

      d.value = c.textContent.replace(/\s+/g, " ");
    });
  }

  AddButton(configData) {
    this.resumeForm.addEventListener("click", event => {
      if (event.target.className === "addButton") {
        var this1 = this;
        var select = this1.getElement(".selectBox");
        var sectionNames = configData.sectionMain;
        var fields = configData.sectionFields;
        var sectionFieldsAdd = configData.sectionFieldsAdd;
        var sectionDeatils = configData.sectionDetails;
        var startIndexForm = configData.startIndexForm;
        var categoryActive = select.value;
        var containers = this1.getElement("#" + categoryActive);

        if (categoryActive == "Basic" || categoryActive == "Objective") {
          alert("you can't add in this section");
        }

        sectionFieldsAdd[categoryActive].forEach(function (rows) {
          var div2 = this1.createElement(
            "div",
            categoryActive + "new" + startIndexForm[categoryActive],
            categoryActive + "inner" + startIndexForm[categoryActive]
          );
          rows.forEach(function (column, index) {
            var label = this1.createElement("label");
            label.appendChild(
              document.createTextNode(fields[categoryActive][index])
            );
            var p = this1.createElement(
              "input",
              fields[categoryActive][index] + "form",
              fields[categoryActive][index] +
                "form" +
                startIndexForm[categoryActive]
            );

            p.appendChild(document.createTextNode(column));
            div2.append(label, p);
          });

          var but = this1.createElement("Button", "confirmFormNew");
          but.append(document.createTextNode("confirm"));

          div2.appendChild(but);
          var res = this1.createElement("Button", "resetFields");
          res.append(document.createTextNode("Reset"));

          div2.appendChild(res);
          var rem = this1.createElement("Button", "removeFields");
          rem.append(document.createTextNode(" X "));

          div2.appendChild(rem);
          containers.append(div2);
          startIndexForm[categoryActive]++;
        });
      }
    });
  }
}

///controller class

class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    this.model.bindShowProjectSection(this.onshowProjectSection);
    this.onshowProjectSection(this.model.configData);

    this.model.bindDisplayValues(this.displayValues);
    this.displayValues(this.model.displayValueFunction);

    this.view.bindConfirmButton(this.handleConfirmButton);
    this.view.bindResetButton(this.handleResetButton);
    this.view.bindRemoveButton(this.handleRemoveButton);
    this.view.bindConfirmButtonNewFields(this.handleConfirmButtonNewFields);
    // this.bindAddButton(this.handleAddButton);
    this.handleAddButton(this.model.configData);
  }

  handleConfirmButton = () => {
    this.model.confirmButton();
  };

  handleResetButton = () => {
    this.model.resetButton();
  };

  handleConfirmButtonNewFields = id => {
    this.model.confirmButtonNewFields(id);
  };

  handleRemoveButton = id => {
    this.model.removeButton(id);
  };

  handleAddButton = configData => {
    this.view.AddButton(configData);
  };

  onshowProjectSection = configData => {
    this.view.showProjectSection(configData);
  };

  displayValues = () => {
    this.view.showDefaultValues();
  };
}

const app = new Controller(new Model(), new View());
