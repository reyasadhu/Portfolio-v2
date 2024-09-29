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
        description={["",
          "• Market Mix Modeling: Developed a Hierarchical Bayesian Regression (HBR) model to analyze KPIs and improve organic search ranks. Collaborated on budget optimization by leveraging insights from the MMM model.",
          "• Price and Promotion Elasticity: Built a predictive sales model using stepwise linear regression and gradient descent. Developed a price simulator in Power BI to visualize price elasticities.",
          "• Duplicate Invoice Detection: Created NLP-based fuzzy matching and semantic analysis to detect duplicate invoices, using classifiers and oversampling techniques for improved accuracy.",
          "• Time Series Forecasting: Developed ARIMA and VAR models to forecast tax compliance, deploying on Databricks and integrating with SQL for real-time use.",
          "• ML Pipeline for Explainable AI: Developed an Azure-based pipeline using SHAP/LIME for interpretability of black box models, deploying it in Python and PySpark."
        ]}
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
          "Techno-commercial Analysis of Electric Vehicles (EVs)",
          "• Completed a thorough technical analysis of hybrid, plug-in and plug-in hybrid EVs.",
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
