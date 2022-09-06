import React from "react";
import Header from "../../Universal-Components/header";
import { ImageTextContainer } from "../../Universal-Components/image_text";
import { HeroArray, outSourcingArr } from "../../Util/Outsorucing/HeroArray";
import ContactSect from "../../Universal-Components/contact_sect";
const OutSourcingPage = () => {
  return (
    <div>
      <Header
        title={"OutSourcing"}
        content={
          "Plavno provides you with highly skilled remote Senior IT Experts who form part of your team or form your company’s entire development team. Our team becomes your team enabling you to scale with the best result."
        }
      />
      <ImageTextContainer imageTextArr={outSourcingArr} />
      <ContactSect />
    </div>
  );
};

export default OutSourcingPage;
