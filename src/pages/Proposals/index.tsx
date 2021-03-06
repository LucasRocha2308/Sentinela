import { useEffect, useState } from "react";
import FilterProposals from "../../components/FilterProposals";
import Header from "../../components/Header";
import ProposalsDeputei from "../../components/ProposalsDeputei";
import ProposalsInfo from "../../components/ProposalsInfo";
import ProposalsInterface from "../../model/ProposalsInterface";
import { useProposals } from "../../provider/proposals";
import api from "../../services/api";
import { ProposalsContainer, ContainerError, ProposalsWrapper } from "./style";

const Proposals = () => {
  const { idProposals, proposalsDeputei } = useProposals();
  const [proposalsInfo, setProposalsInfo] = useState<ProposalsInterface[]>(
    [] as ProposalsInterface[]
  );

  const [hasSearched, setHasSearched] = useState(false);

  const action = () => {
    setHasSearched(true);
  };

  useEffect(() => {
    setProposalsInfo([]);
    api
      .get(`proposicoes/${idProposals}`)
      .then((res) => setProposalsInfo([res.data.dados]));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [idProposals]);

  return (
    <>
      <Header />

      <div style={{ margin: "5rem auto", maxWidth: "1180px" }}>
        <ProposalsWrapper>
          <div className="proposals__parent">
            <div className="proposals__column1">
              <FilterProposals
                action={action}
                title={"Busque pelas propostas de um deputado"}
              />
            </div>
            <div>
              <ProposalsContainer>
                {hasSearched && <ProposalsDeputei />}
                {!proposalsDeputei.length && hasSearched && (
                  <ContainerError>
                    <h2>😡 Não foram feitas propostas neste periodo</h2>
                  </ContainerError>
                )}
                <ProposalsInfo proposalsInfo={proposalsInfo} />
              </ProposalsContainer>
            </div>
          </div>
        </ProposalsWrapper>
      </div>
    </>
  );
};

export default Proposals;
