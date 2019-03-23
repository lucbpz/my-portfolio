<template>
    <!-- Promo Section - "We know design" -->
    <div>
        <grid flat horizontal="left" vertical="middle" :rwd="{compact: 'stack'}" class="no-margin-bottom">
            <grid-item size="1/3" :rwd="{compact: '0/1'}">
                <img src="@/assets/lucas_profile_750.jpg" alt="placeholder"/>
            </grid-item>
            <grid-item size="2/3" :rwd="{compact: '1/1'}">
                <h3 class="about-me-title">About me</h3>
                <p>Music and technology. That about sums me up. I developed my interests in both of these at a young age. While my friends were watching nineties cartoons I was using my first personal computer to learn Qbasic language. My  passion for music and sound inspired my thesis. I integrated sound and technology to create a project about  Blind Source Separation of voice signals in time-frequency domain. The thesis received highest honors by the     defense committee and thesis director.
                </p>
                <br>
                <p>
                    Currently I develop stuff.
                    I started my career as a developer in the Contact Center area, helping businesses create IVR applications that make communications to customers clearer and easy to navigate.
                    Like 90% of developers, I started with back end technologies. But my passion for Front End and technologies such as AngularJS has increased in the past year - I even like UX now. 
                    I believe in a continuous learning career path. I believe it would help you achieve your goals and eventually lead you to your dream job.
                </p>
                <br>
                <p>
                    Feel free to send me a message!
                </p>
                <!-- <p><a href="#work" class="w3-button w3-black"><i class="fa fa-th"> </i> View Our Works</a></p> -->
            </grid-item>
        </grid>

        <!-- <container> -->
            <grid direction="stack" class="dark-background">
                <!-- <grid> -->
                    <grid-item size="1/1">
                        <h3 class="skills-title">I like <span class="yellow-skills-title">working</span> with...</h3>
                    </grid-item>
                <!-- </grid> -->
                <grid flat>
                     <grid-item size="1/5"></grid-item>

                    <grid-item size="1/5">
                        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png" alt="AngularJS">
                    </grid-item>
                    <grid-item size="1/5">
                        <img src="https://vuejs.org/images/logo.png" alt="VUE JS">
                    </grid-item>
                    <grid-item size="1/5">
                        <img src="https://qph.fs.quoracdn.net/main-qimg-48b7a3d8958565e7aa3ad4dbf2312770" alt="Java">
                    </grid-item>
                     <grid-item size="1/5"></grid-item>
                    
                </grid>
            </grid>
        <!-- </container> -->
    </div>

</template>

<style lang="scss">
@import "src/assets/scss/about-me.scss";

img {
  max-width: 100%;
  max-height: 100%;
}

.about-me-title {
  font-size: 14px;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 20px;
  color: #232323;
  letter-spacing: 2px;
  font-weight: 700;
}

.skills-title {
  margin-top: 5%;
  font-family: "Montserrat";
  font-weight: 900;
  text-transform: capitalize;
  font-size: 45px;
  margin-bottom: 30px;
//   color: #fafafa;
  letter-spacing: 2px;
  width: 100%;
}

.yellow-skills-title {
  color: #ecdb54;
}
p {
  font-weight: 300;
  margin-bottom: 30px;
  font-family: "Poppins", sans-serif;
  color: #232323;
  line-height: 32px;
}

.dark-background {
  background-color: #1a222c;
}

.no-margin-bottom {
  margin-bottom: -6px;
}
</style>

