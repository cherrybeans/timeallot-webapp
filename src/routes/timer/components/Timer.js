// @flow
import React, { Component } from "react";
import Tag from "../../../components/Tag/Tag";
import Button from "../../../components/Button/Button";
import Countdown from "../../../components/Countdown/Countdown";
import "./Timer.css";

class Timer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
        { id: 1, text: "timeallot" },
        { id: 2, text: "housework" },
        { id: 4, text: "math" },
        { id: 5, text: "webtek" },
        { id: 3, text: "procrastinating" },
        { id: 6, text: "algdat" },
        { id: 8, text: "ITGK" },
        { id: 9, text: "getting ready" },
        { id: 7, text: "webkom" }
      ]
    };

    this.addTags = this.addTags.bind(this);
    this.removeTags = this.removeTags.bind(this);
  }

  addTags() {
    console.log("add");
  }

  removeTags(id) {
    var newState = this.state;
    var index = newState.tags.findIndex(tag => tag.id === id);

    if (index > -1) {
      newState.tags.splice(index, 1);
    }

    this.setState(newState);
  }

  render() {
    const tags = this.state.tags;
    var tagElements = tags.map((tag, i) => {
      return <Tag key={tag.id} index={i} title={tag.text} />;
    });

    return (
      <div>
        <h1>Timer</h1>
        <p>
          This is a Pomodoro timer. Start doing some focused work! Once you
          start a timer, you cannot do anything else than the task before you.
          If you get distracted, quickly get back into it, or you should cancel
          the timer. There is no pause as that's not how this works.
        </p>
        <InspirationalText />
        <Countdown />
        <h2 style={{ textAlign: "center" }}>Tags</h2>
        <div className="tag-container">{tagElements}</div>
        <div className="tag-container">
          <Button onClick={this.addTags} txt="Add tags" />
        </div>
        <Projects />
        <Subtags />
      </div>
    );
  }
}

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
        { id: 1, text: "timeallot", category: "Projects" },
        { id: 2, text: "housework", category: "General" },
        { id: 4, text: "math", category: "Courses" },
        { id: 5, text: "webtek", category: "Courses" },
        { id: 3, text: "procrastinating", category: "General" },
        { id: 6, text: "algdat", category: "Courses" },
        { id: 8, text: "ITGK", category: "Courses" },
        { id: 9, text: "getting ready", category: "General" },
        { id: 7, text: "webkom", category: "Projects" }
      ],
      categories: [
        { text: "General" },
        { text: "Courses" },
        { text: "Projects" }
      ]
    };
  }

  render() {
    const tags = this.state.tags;
    const categories = this.state.categories;

    var storageProjectTags = [];

    for (var i = 0; i < categories.length; i++) {
      let category = categories[i].text;
      let projectsConnected = tags.filter(tag => tag.category === category);
      var projectTags = projectsConnected.map((tag, i) => {
        return (
          <Tag
            key={tag.id}
            index={i}
            title={tag.text}
            onClick={() => this.removeTags(tag.id)}
          />
        );
      });
      storageProjectTags.push(projectTags);
    }

    var categorySections = categories.map((category, i) => {
      return (
        <div className="sectionContainer">
          <CategoryHeader key={i} title={category.text} />
          {storageProjectTags[i]}
        </div>
      );
    });

    return (
      <div className="sectionContainer">
        <SectionHeader title="Projects" />
        {categorySections}
      </div>
    );
  }
}

class Subtags extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: [
        {
          id: 1,
          text: "timeallot",
          category: "Projects",
          subtags: ["test1", "test2", "test3", "programming"]
        },
        {
          id: 2,
          text: "housework",
          category: "General",
          subtags: ["test1", "test2"]
        },
        { id: 4, text: "math", category: "Courses", subtags: ["test1"] },
        { id: 5, text: "webtek", category: "Courses", subtags: [] },
        {
          id: 3,
          text: "procrastinating",
          category: "General",
          subtags: ["test2"]
        },
        {
          id: 6,
          text: "algdat",
          category: "Courses",
          subtags: ["test1", "test2"]
        },
        {
          id: 8,
          text: "ITGK",
          category: "Courses",
          subtags: ["test1", "test2"]
        },
        {
          id: 9,
          text: "getting ready",
          category: "General",
          subtags: ["test1", "test2"]
        },
        { id: 7, text: "webkom", category: "Projects", subtags: ["test1"] }
      ],
      categories: ["General", "Courses", "Projects"]
    };
  }
  render() {
    var selectedProject = "timeallot";
    var tags = this.state.tags;
    var indexofSelected = tags.findIndex(tag => tag.text === selectedProject);

    var subtags = tags[indexofSelected].subtags.map((subtag, i) => {
      return <Tag key={i} title={subtag} />;
    });

    return (
      <div className="sectionContainer">
        <SectionHeader title="Subtags for 'timeallot'" />
        <div className="sectionContainer">{subtags}</div>
      </div>
    );
  }
}

const AddButton = () => <span style={{ display: "inline" }}>+</span>;

const SectionHeader = props => (
  <h3 style={{ display: "inline" }}>
    {props.title} <AddButton />
  </h3>
);

const CategoryHeader = props => <h4>{props.title}</h4>;

const focusStyle = {
  color: "#9dcb30",
  textAlign: "center",
  marginTop: "30px"
};

const InspirationalText = () => (
  <h2 style={focusStyle}>Have a task that needs to be done?</h2>
);

export default Timer;
