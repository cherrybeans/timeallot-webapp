import React, { Component } from "react";
import Tag from "../Tag/Tag";
import Button from "../Button/Button";
import "./TagContainer.css";

class TagContainer extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [], projects: [] };
    this.sessionState = this.props.props.session;

    this.addTags = this.addTags.bind(this);
    this.removeTags = this.removeTags.bind(this);
  }

  componentDidMount() {
    fetch("http://localhost:8000/categories/")
      .then(results => {
        return results.json();
      })
      .then(results => {
        let data = results;
        this.setState({ data: data });
      });
    fetch("http://localhost:8000/projects")
      .then(results => {
        return results.json();
      })
      .then(results => {
        let projects = results;
        this.setState({ projects: projects });
      });
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
    return (
      <div>
        <h2 style={{ textAlign: "center" }}>Tags</h2>
        <SelectedTags
          session={this.sessionState}
          projects={this.state.projects}
        />
        <div className="tag-container">
          <Button onClick={this.addTags} txt="Add tags" />
        </div>
        <Projects props={this.state.data} />
        <SubtagsByProject
          session={this.sessionState}
          projects={this.state.projects}
        />
      </div>
    );
  }
}

class SelectedTags extends Component {
  render() {
    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }

    const session = this.props.session;
    const projects = this.props.projects;

    var lookupProject = {};
    for (let i = 0; i < projects.length; i++) {
      lookupProject[projects[i].id] = projects[i];
    }
    var tags = [];
    if (!isEmpty(lookupProject)) {
      var projectID = session.project;
      if (projectID) {
        tags.push(lookupProject[projectID]);
        let sessionSubtags = session.subtags;
        let subtags = tags[0].subtags;
        var subtagsFiltered = [];
        for (let i = 0; i < sessionSubtags.length; i++) {
          for (let j = 0; j < subtags.length; j++) {
            if (sessionSubtags[i] === subtags[j].id) {
              subtagsFiltered.push(subtags[j]);
            }
          }
        }

        for (let i = 0; i < subtagsFiltered.length; i++) {
          tags.push(subtagsFiltered[i]);
        }
      }
    }

    if (tags.length) {
      var tagItems = tags.map((tag, i) => {
        return <Tag key={i} title={tag.tag_name} color={"#" + tag.color} />;
      });
    }
    return (
      <div>
        <div className="tag-container">{tagItems}</div>
      </div>
    );
  }
}

class Projects extends Component {
  render() {
    const categories = this.props.props;

    var projectsByCategory = categories.map((category, i) => {
      var projects = category.projects.map(project => {
        return (
          <Tag
            title={project.tag_name}
            color={"#" + project.color}
            key={project.id}
          />
        );
      });

      if (!projects.length) {
        return <div />;
      }
      console.log("projects", projects);

      return (
        <div>
          <CategoryHeader key={category.id} title={category.category_name} />
          <div>{projects}</div>
        </div>
      );
    });

    return (
      <div className="sectionContainer">
        <SectionHeader title="Projects" />
        {projectsByCategory}
      </div>
    );
  }
}

class SubtagsByProject extends Component {
  render() {
    function isEmpty(obj) {
      return Object.keys(obj).length === 0;
    }

    const session = this.props.session;
    const projects = this.props.projects;

    var lookupProject = {};
    for (let i = 0; i < projects.length; i++) {
      lookupProject[projects[i].id] = projects[i];
    }
    var subtags = [];
    if (!isEmpty(lookupProject)) {
      var projectID = session.project;
      if (projectID) {
        subtags = lookupProject[projectID].subtags;
      }
    }

    var subtagItems = subtags.map(subtag => {
      return (
        <Tag
          key={subtag.id}
          title={subtag.tag_name}
          color={"#" + subtag.color}
        />
      );
    });

    return (
      <div className="sectionContainer">
        <SectionHeader title="Subtags" />
        <div>{subtagItems}</div>
      </div>
    );
  }
}

const AddButton = () => <span>+</span>;

const SectionHeader = props => (
  <h3>
    {props.title} <AddButton />
  </h3>
);

const CategoryHeader = props => <h4>{props.title}</h4>;

export default TagContainer;
