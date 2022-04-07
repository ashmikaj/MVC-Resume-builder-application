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
      Images: {
        Basic: 0,
        Objective: "img/objective.png",
        Education: "img/ed.png",
        Experience: "img/ex.png",
        Skills: "img/skil.png",
        Awards: "img/aw.png",
      },
      sectionFieldsAdd: {
        Education: [
          {
            degree: "Enter Degree...",
            institute: "Enter institute...",
            termEd: "Enter term...",
            grade: "Enter Grade....",
          },
        ],
        Experience: [
          {
            designation: "Enter Designation",
            company: "Enter Company Name....",
            termEx: "Enter Period of service",
            workEx: "Enter your Work experience",
          },
        ],
        Skills: [
          {
            skills: "Enter New Skill",
          },
        ],
        Awards: [
          {
            awards: "Enter New Award",
          },
        ],
      },
    };
  }

  bindShowProjectSection(callback) {
    this.onshowProjectSection = callback;
  }

  bindDisplayValues(callback) {
    this.displayValues = callback;
  }
}

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

  confirmButton() {
    var collection = document.getElementsByTagName("input");
    Array.from(collection).forEach(function (element) {
      const a = document.getElementById(element.id.replace("form", ""));
      const b = document.getElementById(element.id).value;
      a.innerHTML = b;
    });
  }

  bindConfirmButton(handle) {
    this.inputContainer.addEventListener("click", event => {
      if (event.target.id === "confirmBtn") {
        handle();
      }
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

  bindResetButton(handle) {
    this.inputContainer.addEventListener("click", event => {
      if (event.target.id === "resetBtn") {
        handle();
      }
    });
  }

  bindRemoveButton(handle) {
    var select = this.getElement(".selectBox");
    this.inputContainer.addEventListener("click", event => {
      if (event.target.id === "removeBtn") {
        switch (select.value) {
          case "Basic" || "Objective":
            alert("you cant remove these fields");
          default:
            const id = event.target.parentElement.id;
            handle(id);
        }
      }
    });
  }

  bindConfirmButtonNewFields(handle) {
    this.inputContainer.addEventListener("click", event => {
      if (event.target.id === "confirmBtnNew") {
        const id = event.target.parentElement.id;
        handle(id);
      }
    });
  }

  refreshContainerHelper(container) {
    while (container.children.length > 0) {
      container.removeChild(container.lastChild);
    }
  }

  optionHelper(sectionNames, select, container) {
    sectionNames.forEach(function (sectionname) {
      var option = document.createElement("option");
      option.append(document.createTextNode(sectionname));
      select.appendChild(option);
      option.value = sectionname;
    });
    return container.appendChild(select);
  }
  confirmButtonElement(formActive, createHelper) {
    var confirmButton = createHelper("Button", "confirmForm", "confirmBtn");
    confirmButton.append(document.createTextNode("confirm"));
    return formActive.appendChild(confirmButton);
  }
  resetButtonElement(formActive, createButtonHelper) {
    var resetButton = createButtonHelper("Button", "resetFields", "resetBtn");
    resetButton.append(document.createTextNode("Reset"));
    return formActive.appendChild(resetButton);
  }

  removeButtonElement(formActive, createButtonHelper) {
    var removeButton = createButtonHelper(
      "Button",
      "removeFields",
      "removeBtn"
    );
    removeButton.append(document.createTextNode(" X "));
    return formActive.appendChild(removeButton);
  }
  newTemplateHelper(
    sectionFieldsAdd,
    categoryActive,
    fields,
    startIndexView,
    containersview,
    createHelper
  ) {
    sectionFieldsAdd[categoryActive].map(function (rows) {
      var activeCategory = createHelper(
        "div",
        categoryActive + "newView" + startIndexView,
        categoryActive + "innerview" + startIndexView
      );
      Object.keys(rows).forEach(function (column, index) {
        var p = createHelper(
          "p",
          fields[categoryActive][index],
          fields[categoryActive][index] + startIndexView
        );
        activeCategory.appendChild(p);
      });
      return containersview.append(activeCategory), startIndexView++;
    });
  }
  inputFieldsHelper(
    rows,
    createElementHelper,
    fields,
    categoryActive,
    startIndexForm,
    formActive
  ) {
    Object.keys(rows).forEach(function (column, index) {
      var label = createElementHelper("label");
      label.appendChild(document.createTextNode(fields[categoryActive][index]));
      var p = createElementHelper(
        "input",
        fields[categoryActive][index] + "form",
        fields[categoryActive][index] + "form" + startIndexForm
      );

      p.appendChild(document.createTextNode(column));

      return formActive.append(label, p);
    });
  }

  showProjectSection(configData) {
    ///this is for the select box

    var this1 = this;
    var select = this1.createElement("select", "selectBox", "selectbox");
    var sectionNames = configData.sectionMain;
    var fields = configData.sectionFields;
    var sectionDeatils = configData.sectionDetails;
    var startIndexView = 0;
    var startIndexForm = 0;
    var imgData = configData.Images;
    var x = "Basic";

    this1.refreshContainerHelper(this1.nameContainer);

    sectionNames.forEach(function (sectionName) {
      var div = this1.createElement("div", sectionName + "View");
      var h2 = this1.createElement("h3");
      var img = this1.createElement("img");
      img.src = imgData[sectionName];
      img.height = "21";
      img.width = "21";
      h2.appendChild(document.createTextNode(sectionName));
      if (sectionName !== "Basic") this1.nameContainer.append(img, h2);
      sectionDeatils[sectionName].forEach(function (rows) {
        var headerContainer = this1.createElement(
          "div",
          sectionName + "newView" + startIndexView,
          sectionName + "innerview" + startIndexView
        );
        rows.forEach(function (column, index) {
          var p = this1.createElement(
            "p",
            fields[sectionName][index],
            fields[sectionName][index] + startIndexView
          );
          p.appendChild(document.createTextNode(column));
          headerContainer.appendChild(p);
        });
        div.appendChild(headerContainer);
        this1.nameContainer.append(div);
        startIndexView++;
      });
    });

    this1.showDefaultValues();

    this1.refreshContainerHelper(this1.inputContainer);

    select.onchange = function () {
      var newCategory = select.value;
      document.getElementById(newCategory).style.display = "block";
      document.getElementById(x).style.display = "none";
      x = newCategory;
    };

    this1.optionHelper(sectionNames, select, this1.inputContainer);

    ///this is for the forms & input fields

    sectionNames.forEach(function (sectionName) {
      var div = this1.createElement("div", sectionName, sectionName);
      this1.inputContainer.append(div);
      sectionDeatils[sectionName].forEach(function (rows) {
        var sectionContainer = this1.createElement(
          "div",
          sectionName + "new" + startIndexForm,
          sectionName + "inner" + startIndexForm
        );

        rows.forEach(function (column, index) {
          var label = this1.createElement("label");
          label.appendChild(
            document.createTextNode(fields[sectionName][index])
          );
          var p = this1.createElement(
            "input",
            fields[sectionName][index] + "form",
            fields[sectionName][index] + "form" + startIndexForm
          );

          p.appendChild(document.createTextNode(column));
          sectionContainer.append(label, p);
        });

        this1.confirmButtonElement(sectionContainer, this1.createElement);
        this1.resetButtonElement(sectionContainer, this1.createElement);
        this1.removeButtonElement(sectionContainer, this1.createElement);
        div.appendChild(sectionContainer);
        this1.inputContainer.append(div);
        startIndexForm++;
      });
    });

    ///this is how resume is lookin
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

  onAddButtonClick(configData) {
    this.resumeForm.addEventListener("click", event => {
      if (event.target.className === "addButton") {
        var this1 = this;
        var select = this1.getElement(".selectBox");
        var fields = configData.sectionFields;
        var sectionFieldsAdd = configData.sectionFieldsAdd;
        var startIndexForm = 0;
        var categoryActive = select.value;
        var containers = this1.getElement("#" + categoryActive);
        var containersview = this1.getElement("." + categoryActive + "View");
        var startIndexView = 0;

        if (categoryActive == "Basic" || categoryActive == "Objective") {
          alert("you can't add in this section");
        }

        sectionFieldsAdd[categoryActive].map(function (rows) {
          var formActive = this1.createElement(
            "div",
            categoryActive + "new" + startIndexForm,
            categoryActive + "inner" + startIndexForm
          );

          this1.inputFieldsHelper(
            rows,
            this1.createElement,
            fields,
            categoryActive,
            startIndexForm,
            formActive
          );

          this1.confirmButtonElement(formActive, this1.createElement);
          this1.resetButtonElement(formActive, this1.createElement);
          this1.removeButtonElement(formActive, this1.createElement);

          containers.append(formActive);
          startIndexForm++;
        });

        this1.newTemplateHelper(
          sectionFieldsAdd,
          categoryActive,
          fields,
          startIndexView,
          containersview,
          this1.createElement
        );
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

    this.handleAddButton(this.model.configData);
  }

  handleConfirmButton = () => {
    this.view.confirmButton();
  };

  handleResetButton = () => {
    this.view.resetButton();
  };

  handleConfirmButtonNewFields = id => {
    this.model.confirmButtonNewFields(id);
  };

  handleRemoveButton = id => {
    this.view.removeButton(id);
  };

  handleAddButton = configData => {
    this.view.onAddButtonClick(configData);
  };

  onshowProjectSection = configData => {
    this.view.showProjectSection(configData);
  };

  displayValues = () => {
    this.view.showDefaultValues();
  };
}

const app = new Controller(new Model(), new View());
