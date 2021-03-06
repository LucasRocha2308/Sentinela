import styled from "styled-components";

export const MoreSpentContainer = styled.div`
    min-height: 380px;

    @media (min-width: 768px) {
        background-color: var(--dark-blue);
        color: var(--white);
        width: 25rem;
        padding: 2rem;
        height: 27rem;
        border-radius: 7px 0 0 7px;
        box-shadow: 0 19px 38px rgba(0, 0, 0, 0.3),
            0 15px 12px rgba(0, 0, 0, 0.22);
    }
    h2 {
        color: var(--dark-blue);
        line-height: 25px;
        text-transform: uppercase;
        @media (min-width: 768px) {
            color: var(--white);
        }
    }
    div {
        display: flex;
        align-items: flex-end;
        flex-direction: row-reverse;
        justify-content: center;
        gap: 1.5rem;

        section {
            display: flex;
            max-width: 40.56px;
            flex-direction: column;
            justify-content: space-around;
            align-items: center;
            text-align: center;
            gap: 5px;
            p {
                font-size: 9px;
            }
            p:nth-child(2) {
                width: min-content;
            }
            span {
                height: 40.56px;
                width: 40.56px;
                border-radius: 100%;
                z-index: 2;
                overflow: hidden;
            }

            div {
                background: linear-gradient(
                    180deg,
                    #163a4b 0%,
                    #7dbff6 60%,
                    rgba(77, 191, 246, 0) 100%
                );

                border-radius: 6.34884px;
                width: 40.56px;
            }
        }
    }
`;
export const Image = styled.img`
    height: 40.56px;
    transform: translateX(-10px);
    z-index: 1;
`;
