import React from "react";
import {Header} from "../organisms/layout/Header";
import {ReactNode,FC} from "react";

type Props = {
    children: ReactNode;
};

const HeaderLayout: FC<Props> = (props) => {
    const {children} = props;
    return (
        <>
            <Header />
            {children}
        </>

    )
};

export default HeaderLayout;
