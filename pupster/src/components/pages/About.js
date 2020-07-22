import React from "react";

function About() {
    const styles = {
        backgroundImage: "https://thumbs.dreamstime.com/b/many-dogs-sitting-white-background-group-set-39468318.jpg",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
    };
    return (
        <div>
            <div className="jumbotron-fluid text-center text-white" style={styles}>
                <br />
                <h1 className="my-5">About Page</h1>
                <br />
            </div>
            <div>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
                magna aliqua. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus semper. Adipiscing elit 
                duis tristique sollicitudin nibh sit amet commodo. Vel turpis nunc eget lorem dolor. Vestibulum mattis 
                ullamcorper velit sed ullamcorper morbi. Mattis aliquam faucibus purus in massa tempor nec feugiat nisl. Erat 
                pellentesque adipiscing commodo elit. Tellus rutrum tellus pellentesque eu. Dictum varius duis at consectetur 
                lorem donec. Donec enim diam vulputate ut pharetra sit amet aliquam id. Fermentum iaculis eu non diam phasellus 
                vestibulum lorem sed risus. Nec sagittis aliquam malesuada bibendum arcu vitae elementum curabitur. Diam donec 
                adipiscing tristique risus nec feugiat. Nullam eget felis eget nunc lobortis mattis. Risus in hendrerit gravida 
                rutrum quisque non. Nam libero justo laoreet sit. Porttitor massa id neque aliquam.
                </p>
            </div>
        </div>
    )
}

export default About;