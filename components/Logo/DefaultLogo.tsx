import { faMountainSun} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface DefaultLogoProps {
    color?: string;
    height?: number;
    width?: number;
    fontSize?: string;
}

const DefaultLogo = (props: DefaultLogoProps) => {

    const { color, height, width, fontSize } = props;

    return (
        <a href="/" className="-m-1.5 p-1.5 flex items-center justify-center"> 

            <span className="sr-only" style={{ fontSize: fontSize ? fontSize : "1.5rem" , color: color ? color : "#00bedd" }}>Pegasus</span>
            <FontAwesomeIcon
                icon={faMountainSun}
                className="text-primary"
                aria-hidden="true"
                style={{ color: color ? color : "#00bedd", height: height ? height : 40, width: width ? width : 40 }}
            />
            <span className="ml-2 text-2xl font-extrabold text-primary">
               Olympos
            </span>

        </a>
    );
}

export default DefaultLogo;
