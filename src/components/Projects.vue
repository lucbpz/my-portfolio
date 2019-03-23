<script>
import Project from "@/components/Project.vue";

const Projects = ({props}) => {
    return (
        <div style={props.theme}>
            {props.items.map((item, i) => {
                const k = String(i);
                const projectProps = {theme: props.theme, ...item}
                return <Project {...projectProps} key={k} />;
            })}
        </div>
    );
}
export default Projects;
</script>

<style lang="scss">
.projects {
    display: flex;
    flex-direction: column;
    width: 100vw;
    justify-content: center;
    align-items: center;
}
</style>


