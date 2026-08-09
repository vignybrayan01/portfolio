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
            "Conception d'une plateforme Data & IA de bout en bout sur Databricks combinant architecture Lakehouse Bronze/Silver/Gold, recherche vectorielle et agent conversationnel RAG. Les données clients, commandes, produits et politiques métier sont ingérées, nettoyées et gouvernées avec Delta Lake et Unity Catalog. Un agent LangChain interroge ensuite les données structurées et un index Vector Search afin de fournir des réponses contextualisées en langage naturel. Le modèle est industrialisé avec MLflow et Databricks Model Serving, puis exposé dans une interface Streamlit.",

        descriptionEn:
            "Designed an end-to-end Data & AI platform on Databricks combining a Bronze/Silver/Gold Lakehouse architecture, vector search and a conversational RAG agent. Customer, order, product and business-policy data are ingested, transformed and governed using Delta Lake and Unity Catalog. A LangChain agent queries both structured data and a Vector Search index to generate contextual natural-language answers. The solution is industrialized with MLflow and Databricks Model Serving and exposed through a Streamlit interface.",

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
            "Conception d'une architecture Big Data temps réel destinée au traitement de flux IoT à grande échelle. Kafka assure l'ingestion des événements tandis que Spark Structured Streaming réalise les traitements distribués. Les données sont stockées et exploitées dans l'écosystème AWS avec S3, Glue, Athena et Redshift. L'orchestration et l'industrialisation du pipeline reposent sur Airflow et Docker, avec une couche de restitution analytique permettant l'exploitation des données produites.",

        descriptionEn:
            "Designed a real-time Big Data architecture for processing large-scale IoT streams. Kafka handles event ingestion while Spark Structured Streaming performs distributed processing. Data is stored and analyzed within the AWS ecosystem using S3, Glue, Athena and Redshift. Airflow and Docker are used for orchestration and industrialization, with an analytics layer for exploiting processed data.",

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