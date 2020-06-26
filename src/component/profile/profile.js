import React from "react";
import './styles.css';

function Profile() {
    return (
      <div class="container main">
        <div class="row">
          <div class="page-header">
            <h3>
              <b>Profile</b>
            </h3>
            <hr class="my-3"></hr>
          </div>
        </div>
        <article class="row single-post mt-5 no-gutters post">
          <div class="col-md-12">
            <div class="image-wrapper float-left pr-3">
              <img src="http://placehold.it/200x150" alt=""></img>
            </div>
            <div class="single-post-content-wrapper p-10">
              <p>
                My name is Emily Gaska and I am working toward becoming a proper
                programmer! I have experience with Java, C++, Javascript, and
                HTML/CSS. Currently working through the SMU Full Stack Flex
                Bootcamp program and should be finished this summer! Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Iure tempore, nulla
                quis laborum natus labore dolores id, quidem minus aliquid dolorem
                asperiores. Tenetur, porro corporis accusamus perferendis ab aut
                exercitationem! Lorem ipsum dolor sit amet consectetur adipisicing
                elit. Repellat nihil eligendi nobis voluptatem, recusandae fugiat
                debitis corrupti amet perspiciatis doloribus. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Perspiciatis impedit soluta
                repudiandae accusantium nihil alias et, porro, dicta numquam
                facere repellendus, deleniti quisquam rem consequatur
                reprehenderit quis. Eaque veritatis obcaecati ea, nostrum possimus
                nulla? Neque exercitationem ea ad beatae repellendus.
              </p>
            </div>
          </div>
        </article>
      </div>
    );
}

    export default Profile;