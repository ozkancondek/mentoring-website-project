import React from "react";
import { Cards } from "./Cards";
import { InfoCardsContainer } from "./InfoCardsStyles";

export const InfoCards = ({ firstCard, lastCard }) => {
  let cardInfos = [
    {
      header: "Virtuelles Mentoring Programm",
      desc: "Jedes Mentoring Programm Modul wird 5 Monate lang dauern",
      img: "https://www.2civility.org/wp-content/uploads/2020/11/iStock-1217284520.jpg",
    },
    {
      header: "Gruppen Mentoring",
      desc: "Mentor/Mentorinnen und Mentees werden sich jede zweite Woche virtuell in Gruppen 2 Stunde lang auf festgelegte Mentoring Bereichen treffen",
      img: "https://image.shutterstock.com/image-vector/employees-giving-hands-helping-colleagues-260nw-1730317201.jpg",
    },
    {
      header: "Eins zu Eins Mentoring",
      desc: "Um die Mentees persönlich zu fördern, individuelle Bedürfnisse und Interesse zu decken und eine gesunde Verknüpfung zu erstellen werden sie sich auch Eins zu Eins jede zweite Woche 30 Minuten lang virtuell/persönlich treffen",
      img: "https://content.thriveglobal.com/wp-content/uploads/2019/05/Top-7-qualities-of-the-best-mentors-in-a-business.png",
    },
    {
      header: "Workshops",
      desc: "Zweimal im Jahr werden Workshops in unterschiedlichen Bereichen an einigen Großstädten (Köln, Berlin, Frankfurt, München, Dresden) organisiert",
      img: "https://www.lib.polyu.edu.hk/newsletter/49/newsletter-49-workshop.png",
    },
    {
      header: "Summer Programm",
      desc: "In den Sommerferien, ein bis drei Wochen werden die Jugendlichen an den gesponserten Projektprogrammen, Bildungsprogrammen, Atelier und an Praktiken beteiligen",
      img: "https://blog.planview.com/wp-content/uploads/2020/02/Project-Planning-and-Delivery.jpg",
    },
  ];
  return (
    <div>
      <InfoCardsContainer>
        {cardInfos.slice(firstCard, lastCard).map((info, index) => (
          <Cards info={info} kex={index} />
        ))}
      </InfoCardsContainer>
    </div>
  );
};
