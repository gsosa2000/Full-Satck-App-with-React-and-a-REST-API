//Import react and react components
import React, { Component } from 'react';

class Courses extends Component {

	state = {
		//courses array
		courses: [],
		//variable to handle wheter the data is still loading
		loading: true
	}

	componentDidMount() {
		this.setState({loading: true});
		//fetch call to the courses GET route
    fetch('http://localhost:5000/api/courses')
      .then(data => data.json())
      .then(data => this.setState({courses: data, loading: false}))
      .catch(err => this.props.history.push('/error'));
  }
    
	render(){
		//once the data has finished loading the course is displayed
		if (this.state.loading)
			return (<h3>Loading...</h3>);
		else
			return (
				<div className="bounds">
					{this.state.courses.map(course => (
						<div className="grid-33" key={course._id}>
							<a className="course--module course--link" href={`/courses/${course._id}`}>
	              <h4 className="course--label">Course</h4>
	              <h3 className="course--title">{course.title}</h3>
	            </a>
	          </div>
					))}
	        <div className="grid-33">
	        	<a className="course--module course--add--module" href="/courses/create">
	            <h3 className="course--add--title">
	            	<svg version="1.1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 13 13" className="add">
	              <polygon points="7,6 7,0 6,0 6,6 0,6 0,7 6,7 6,13 7,13 7,7 13,7 13,6 "></polygon>
	            </svg>New Course</h3>
	          </a>
	        </div>
		    </div>
			);
	}
}

export default Courses;