<script>
const Project = ( {data} ) => {
  return (
    <div style={data.theme} class="project">
      <div class="project-image">
        <img src={data.imgSrc} />
      </div>
      <div class="project-text">
        <h3>{data.title}</h3>
        <p>{data.description}</p>
        <div>Details -></div>
      </div>
    </div>
  );
};

export default Project;
</script>

<style lang="scss">
.project {
  display: flex;
  flex-direction: row;
  padding: 24px;
  flex-wrap: wrap;

  .project-text {
    display: block;
    text-align: left;
    padding: 0 8px;
  }
  
  .project-image {
    img {
      max-width:72vw;
    }
  }
}
</style>
