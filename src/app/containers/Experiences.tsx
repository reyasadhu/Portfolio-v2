import Experience from "../components/Experience";
import fractal from "../../assets/fractal.png";
import VCE from "../../assets/VCE.png";
import CU from "../../assets/CU.png";
import TikTok from "../../assets/TikTokLogo.png";
import UCSD from "../../assets/UCSD.png";
import IITR from "../../assets/IITR.png";

const Experiences = () => {
  return (
    <>
      <Experience
        imageSrc={TikTok}
        imageAlt="TikTok"
        description={["Estimated Time of Delivery models for end to end logistics for TikTok Shop",
          "• Developed inference and optimization ETA models in PySpark using real-time features with SQL, Hive and Hadoop.",
          "• Worked on the entire modeling lifecycle, including feature creation, testing, experimentation, monitoring, and explainability."]}
        positionName="Machine Learning Engineer Intern"
        companyName="TikTok"
        location="Seattle, Washington, USA"
        backgroundColor="#F8F8FA"
        dateOfExperience="June 2024 - September 2024"
      />
      <Experience
        imageSrc={UCSD}
        imageAlt="UC San Diego 2024"
        description={["Language Model for Mutation Prediction",
        "• Designed a Decoder-only Transformer model in Pytorch to predict the next mutations in SARS-CoV-2 genomic sequences, leveraging masked self-attention.",
        "• Conducted research on various weight initialization techniques (Xavier, Kaiming, normal) and activation functions to mitigate vanishing and exploding gradient issues in deep neural networks."]}
        positionName="Graduate Student Researcher"
        companyName="UCSD"
        location="California, USA"
        backgroundColor="#FFFFFF"
        dateOfExperience="April 2024 - June 2024"
      />
      <Experience
        imageSrc={fractal}
        imageAlt="fractal 2022"
        description={["","I implemented a read-only access mode for fractal&rsquo;s Console for Businesses using React.js, Angular.js, and Java, addressing customer security concerns and improving support processes by 40%. This involved refining data and authentication logic to establish role-based access control with token-based authentication. I integrated backend APIs to validate user permissions in real-time, ensuring secure and streamlined access for users."]}
        positionName="Data Scientist"
        companyName="fractal"
        location="Bangalore, India"
        backgroundColor="#F8F8FA"
        dateOfExperience="June 2022 - September 2022"
      />
      <Experience
        imageSrc={VCE}
        imageAlt="Vardhan Consulting Engineers"
        description={[
          "Techno-commercial Analysis of Electric Vehicles",
          "• Completed a thorough technical analysis of hybrid, plug-in and plug-in hybrid Electric vehicles.",
          "• Completed a detailed case study on the empowerment of Electric rickshaws in India."
        ]}
        positionName="Research Intern"
        companyName="Vardhan Consulting Engineers"
        location="India"
        backgroundColor="#FFFFFF"
        dateOfExperience="April 2020 - May 2020"
      />
      <Experience
        imageSrc={CU}
        imageAlt="Calcutta University"
        description={["Switchgear and Power System Protection",
          "• The project was aimed to a state-of-the-art survey of theories and methods of protection and switchgear.",
          "• A protective scheme including CBs and protective relays was experimented with, for fast fault detection and isolation of the faulty section of the system."]}
        positionName="Research Intern"
        companyName="Calcutta University"
        location="Calcutta, India"
        backgroundColor="#F8F8FA"
        dateOfExperience="Nov 2019 - Dec 2019"
      />
      <Experience
        imageSrc={IITR}
        imageAlt="IIT Roorkee"
        description={["Detection of turn-by-turn Fault in Transformer by SFRA Method",
          "• The project was targeted to interpret SFRA algorithm for power transformer turn-to-turn fault identification.",
          "• Interfaced Octave and FEMM to derive a transformer equivalent ladder network from the mechanical description.",
          "• The network was simulated on MATLAB, Simulink and Ltspice and transfer functions are plotted as fingerprints.",
          "• Applied various statistical analyses to compare fingerprints of healthy and faulty transformers to identify the fault."]}
        positionName="Research Intern"
        companyName="Spark, IIT Roorkee"
        location="IIT Roorkee, India"
        backgroundColor="#FFFFFF"
        dateOfExperience="May 2019 - July 2019"
      />
    </>
  );
};

export default Experiences;
