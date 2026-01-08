"use client";
import { motion } from "motion/react";
import Link from "next/link";
import styled from "styled-components";

export default function Header() {
    return (
        <HeaderWrapper
            initial={{ translateY: "-100%" }}
            animate={{ translateY: "0" }}>
            <h1>Ink School</h1>

            <Navigation>
                <ul>
                    <li>
                        <Link href="/">Accueil</Link>
                    </li>
                    <li>
                        <Link href="/programs">Programmes</Link>
                    </li>
                    <li>
                        <Link href="/galery">Galerie</Link>
                    </li>
                    <li>
                        <Link href="/testimony">Temoignages</Link>
                    </li>
                    <li>
                        <Link href="/join-us">Rejoigner nous</Link>
                    </li>
                </ul>
            </Navigation>
        </HeaderWrapper>
    );
}

const HeaderWrapper = styled(motion.header)`
    display: flex;
    flex-direction: horizontal;
`;

const Navigation = styled.nav``;
