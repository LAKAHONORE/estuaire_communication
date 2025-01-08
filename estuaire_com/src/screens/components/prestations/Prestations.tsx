import { useContext } from "react";
import SingleCategorie from "../single-categorie/SingleCategorie";
import { ConfigContext } from "../../Layout";
import { PermisType } from "../../../types/ConfigTypes";

export default function Prestations() {

  const data = useContext(ConfigContext);

  return (
    <div className="flex flex-col w-full my-24">
      <div className="flex flex-row justify-center items-center px-4">
        <span className="relative text-2xl text-center font-semibold text-blue after:absolute after:left-0 after:w-full after:scale-x-50 after:border-b-4 after:border-blue after:bottom-0">
          De quoi avez-vous besoin ?
        </span>
      </div>

      <div className="flex w-full justify-center items-center my-24">

        <div className="flex flex-col md:grid grid-cols-3 mx-12 md:mx-0 md:w-[60%] gap-6">

        {
          data?.permis.map((permi: PermisType) => (
            <SingleCategorie
            img="/assets/presentation.jpg"
            title={permi.name}
            description={permi.description}
            link="/single-offer"
            linkTitle="En savoir plus"
            object={permi}
            key={permi.id}
          />

          ))
        }


        </div>

      </div>


    </div>
  )
}
