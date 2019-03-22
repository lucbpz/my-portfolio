<template>
    <!-- Promo Section - "We know design" -->
    <!-- <container> -->
        <grid flat horizontal="left" vertical="middle" :rwd="{compact: 'stack'}">
            <grid-item size="2/3" :rwd="{compact: '1/1'}">
                <grid direction="stack">
                    <grid-item class="dark">
                         <h3>PROJECT NAME!</h3>
                    </grid-item>
                    <grid-item>
                         <h3>Hello!</h3>
                        <p>Music and technology. That about sums me up. I developed my interests in both of these at a young age. While my friends were watching nineties cartoons I was using my first personal computer to learn Qbasic language. My  passion for music and sound inspired my thesis. I integrated sound and technology to create a project about  Blind Source Separation of voice signals in time-frequency domain. The thesis received highest honors by the     defense committee and thesis director.
                        </p>
                        <br>
                        <p>
                            Currently I develop stuff.
                            I started my career as a developer in the Contact Center area, helping businesses create IVR applications that make communications to customers clearer and easy to navigate.
                            Like 90% of developers, I started with back end technologies. But my passion for Front End and technologies such as AngularJS has increased in the past year - I even like UX now. 
                            I believe in a continuous learning career path. I believe it would help you achieve your goals and eventually lead you to your dream job.
                        </p>
                        <!-- <p><a href="#work" class="w3-button w3-black"><i class="fa fa-th"> </i> View Our Works</a></p> -->
                    </grid-item>
                </grid>
               
            </grid-item>
            <grid-item size="1/3" :rwd="{compact: '0/1'}">
                <img src="@/assets/lucas_profile_750.jpg" alt="placeholder"/>
            </grid-item>
        </grid>
    <!-- </container> -->

</template>

<style lang="scss">
@import "src/assets/scss/about-me.scss";

img {
  max-width: 100%;
  max-height: 100%;
}
.dark {
  background: #1a222c;
  color: white;
}
</style>

