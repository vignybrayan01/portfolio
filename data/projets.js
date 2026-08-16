const PROJETS = [

    {
        id: "retail-ai",

        badgeFr: "IA Générative & Data",
        badgeEn: "Generative AI & Data",

        titleFr:
            "Retail AI Platform — Databricks Lakehouse & Agent RAG",

        titleEn:
            "Retail AI Platform — Databricks Lakehouse & RAG Agent",

        descriptionFr:
            "Conception d’une plateforme Data & IA de bout en bout sur Databricks, combinant une architecture Lakehouse Bronze / Silver / Gold, des pipelines de traitement distribué et des applications d’IA générative. Mise en place de pipelines d’ingestion, de nettoyage et de structuration des données clients, commandes, produits et politiques métier avec PySpark, Spark SQL et Delta Lake. Utilisation de Unity Catalog pour organiser, sécuriser et gouverner les données et les objets de la plateforme. Développement d’un agent conversationnel basé sur une architecture RAG, capable d’interroger des données structurées et une base documentaire. Intégration de LangChain et Databricks Vector Search pour orchestrer la recherche d’informations pertinentes et générer des réponses contextualisées en langage naturel. Gestion du cycle de vie du modèle avec MLflow, puis industrialisation et exposition via Databricks Model Serving. Développement d’une interface utilisateur avec Streamlit permettant d’interagir avec l’agent conversationnel.",

        descriptionEn:
            "Designed and developed an end-to-end Data & AI platform on Databricks, combining a Bronze / Silver / Gold Lakehouse architecture, distributed data processing pipelines, and generative AI applications. Implemented data ingestion, cleaning, and structuring pipelines for customer, order, product, and business policy data using PySpark, Spark SQL, and Delta Lake. Used Unity Catalog to organize, secure, and govern data and platform objects. Developed a RAG-based conversational agent capable of querying both structured data and a document repository. Integrated LangChain and Databricks Vector Search to orchestrate relevant information retrieval and generate contextualized natural-language responses. Managed the model lifecycle with MLflow, then industrialized and exposed the model through Databricks Model Serving. Developed a Streamlit user interface to enable interaction with the conversational agent.",

        technologies: [
            "Databricks",
            "PySpark",
            "Spark SQL",
            "Delta Lake",
            "Unity Catalog",
            "LangChain",
            "RAG",
            "Vector Search",
            "LLM",
            "MLflow",
            "Model Serving",
            "Streamlit",
            "Python"
        ],

        image:
            "./assets/images/projects/retail-ai.jpg",

        github: "",
        demo: ""
    },


    {
        id: "smart-city",

        badgeFr: "Big Data & Streaming",
        badgeEn: "Big Data & Streaming",

        titleFr:
            "Pipeline Big Data Temps Réel — Smart City",

        titleEn:
            "Real-Time Big Data Pipeline — Smart City",

        descriptionFr:
            "Conception d’une architecture Big Data temps réel destinée à l’ingestion et au traitement de flux IoT à grande échelle. Mise en place de Kafka pour l’ingestion continue des événements issus de différentes sources, puis développement de traitements distribués avec Spark Structured Streaming pour transformer et traiter les données en temps réel. Stockage des données dans AWS S3 et intégration avec AWS Glue pour leur catalogage et leur exploitation. Mise en place de traitements analytiques avec Amazon Athena et Amazon Redshift afin de permettre l’interrogation et l’analyse des données produites. Orchestration des différentes étapes du pipeline avec Apache Airflow et conteneurisation de l’environnement d’exécution avec Docker. Développement d’une couche de restitution analytique avec Power BI pour faciliter l’exploitation et la visualisation des données issues du pipeline.",

        descriptionEn:
            "Designed a real-time Big Data architecture for large-scale IoT data ingestion and processing. Implemented Kafka for continuous ingestion of events from multiple data sources, then developed distributed processing pipelines with Spark Structured Streaming to transform and process data in real time. Stored data in AWS S3 and integrated AWS Glue for data cataloging and management. Implemented analytical processing with Amazon Athena and Amazon Redshift to enable data querying and analysis. Orchestrated the different pipeline stages using Apache Airflow and containerized the execution environment with Docker. Developed an analytical reporting layer with Power BI to facilitate the exploitation and visualization of data produced by the pipeline.",

        technologies: [
            "Python",
            "Kafka",
            "Spark",
            "Spark Streaming",
            "Airflow",
            "Docker",
            "AWS S3",
            "AWS Glue",
            "Athena",
            "Redshift",
            "Power BI"
        ],

        image:
            "./assets/images/projects/smart-city.jpg",

        github: "",
        demo: ""
    }

];