import TextoCentral from "../components/TextoCentral";

export default (props) => {
    const route = props.route;
    const numero = route && route.params && route.params.numero ? route.params.numero : 0;
    return (
        <TextoCentral corFundo="#9932CD">
            Tela C - {numero}
        </TextoCentral>
    )
}