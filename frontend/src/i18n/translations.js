const translations = {
  en: {
    nav: {
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      lab: "Lab",
      contact: "Contact",
      cta: "Join My Network",
    },
    hero: {
      label: "INFRASTRUCTURE \u00b7 CLOUD \u00b7 IT SECURITY \u00b7 DEV",
      title: "Infrastructure Specialist ",
      titleAccent: "with focus on Cloud and DevOps",
      subtitle: "Over 10 years of experience in technical support, infrastructure and corporate environments.",
      description: "Professional with solid background in networking, Windows and Linux systems, Microsoft 365 and information security. Currently directing evolution towards Cloud, automation and DevOps, combining practical field experience with continuous learning to build more secure, efficient and scalable environments.",
      cta: "Get in Touch",
    },
    about: {
      label: "About Me",
      title: "Gregory Porto",
      paragraphs: [
        "I currently work in the IT department at Alimentos Toscana, supporting the evolution of technological infrastructure, corporate support, internal process organization and operational stability of the company's environments, including TOTVS, networks, Microsoft 365 and corporate solutions.",
        "With over 10 years of experience in IT, I have worked with technical support, infrastructure, networks, information security and enterprise systems. I have solid experience in supporting and implementing different software architectures, progressing from commercial and vertical solutions to large corporate systems: TOTVS (current industrial corporate ERP), ContaAzul and Sisplan (ERPs optimized for the food sector), HUB MoveEdu (ERP focused on educational management and franchises) and i9PDV (commercial automation and point of sale).",
        "I am a reserve Brazilian Navy Marine with operations in the Amazon. This military background brought me experiences in high-pressure scenarios that developed strict discipline, extreme resilience and rapid adaptability.",
        "Today I am directing my professional growth toward Modern Infrastructure, Cloud, Automation, DevOps and Information Security, combining practical field experience with modern, scalable architectures.",
      ],
      focusLabel: "Current Focus",
      focusItems: [
        "Cloud Computing (AWS & Azure)",
        "Corporate Infrastructure",
        "Information Security",
        "DevOps & Automation",
        "Microsoft 365",
        "ERP TOTVS",
        "Networks & Corporate Services",
        "Windows & Linux Environments",
      ],
    },
    skills: {
      label: "Core Skills",
      title: "What I work with",
      items: [
        { title: "Cloud Computing (AWS & Azure)", text: "Solid fundamentals in AWS, operating essential solutions like EC2, S3, VPC, IAM and CloudWatch. Currently leading feasibility study and planning for migration and integration of environments to Microsoft Azure, aligning infrastructure with our Microsoft 365 architecture." },
        { title: "Modernized Networks & Infrastructure", text: "Prospecting and sustaining corporate networks. Practical experience in structured cabling, switch, router and firewall configuration. Actively working on network segmentation (VLANs and dedicated Wi-Fi, such as separate structures for ADM and Guest), ensuring performance, security and high availability for sectors." },
        { title: "Support, Systems & ERPs", text: "Complete workstation management, advanced troubleshooting and Microsoft 365 ecosystem administration. Experience in operational support and parameterization of multiple ERPs and commercial systems, including: TOTVS (support of current environment in food industrial sector), ContaAzul & Sisplan (management and support in ERPs focused on retail and food industry), HUB MoveEdu (administration of verticalized ERP for franchise and education networks) and i9PDV (commercial automation, support and point of sale management)." },
        { title: "Corporate Cybersecurity", text: "Practical application of access control policies (IAM), management and audit of backup routines, endpoint protection and implementation of customized digital security best practices for SME scenarios." },
        { title: "DevOps, Automation & Future (In Evolution)", text: "Focus directed toward DevOps culture and infrastructure as code (IaC). Basic knowledge of Linux and Git. Currently structuring the conceptual foundation for future implementation of containers (Docker) and automation pipelines (CI/CD), connecting theoretical learning to real technological evolution needs of the company." },
        { title: "Technical Consulting & Processes", text: "Critical assessment of IT environments, bottleneck mapping, strategic hardware/software recommendations, operational flow optimization and technology alignment with company business objectives." },
      ],
    },
    experience: {
      label: "Professional Experience",
      title: "Career Path",
      roles: [
        {
          role: "Systems Analyst",
          company: "Alimentos Toscana",
          companyLink: "https://www.alimentostoscana.com.br/",
          period: "Nov 2025 \u2013 Present",
          current: true,
          bullets: [
            "Management and modernization of the technology park, executing the complete cycle of hardware upgrade and replacement focused on high availability.",
            "Strategic action in the support and parameterization of ERPs TOTVS, ContaAzul and Sisplan, mapping and optimizing processes for business scale and operation.",
            "Architecture, access governance and administration of the email ecosystem, leading the definitive migration and user training in the Microsoft 365 environment.",
            "Research, feasibility and technical design for future implementation of Artificial Intelligence tools applied to operations.",
          ],
        },
        {
          role: "IT Instructor & Coordinator",
          company: "Microlins",
          companyLink: "https://www.microlinsfloripa.com.br/",
          period: "2024 \u2013 2025",
          current: false,
          bullets: [
            "Teaching IT fundamentals, network architecture and hardware, translating complex concepts for different learning levels in both institutions.",
            "Leadership and pedagogical coordination at Microlins, administering the ERP HUB MoveEdu for class control, schedules and retention indicators.",
            "Development and adaptation of curricular matrices with total focus on practical learning and hands-on methodology.",
          ],
        },
        {
          role: "Freelance IT Support Analyst",
          company: "Self-employed",
          period: "2014 \u2013 2023",
          current: false,
          bullets: [
            "Specialized consulting service (on-site and remote) focused on infrastructure solutions for SMEs and self-employed professionals.",
            "Comprehensive technical support: implementation of corporate networks, data security, advanced troubleshooting and administration of operating systems.",
            "Consolidation of a long-term client portfolio based on reliable and efficient service level agreements (SLA).",
          ],
        },
        {
          role: "B2B Commercial Representative - i9PDV Systems",
          company: "i9PDV Systems",
          companyLink: "http://i9pdv.com",
          period: "2019 \u2013 2021",
          current: false,
          bullets: [
            "Technical consulting and strategic commercial support focused on the sale of commercial automation and billing systems (i9PDV).",
            "Consultative action as a technical bridge, translating the client's business needs into point of sale and back office software requirements.",
          ],
        },
        {
          role: "Brazilian Navy Marine",
          company: "Brazilian Navy",
          period: "2005 \u2013 2010",
          current: false,
          bullets: [
            "Developed strong discipline, teamwork and resilience under high-pressure environments",
            "Foundation of structured thinking and mission-oriented execution that carries into IT work",
          ],
        },
      ],
    },
    projects: {
      label: "Case Studies",
      title: "Problems solved, results delivered.",
      items: [
        {
          title: "Corporate Network Overhaul",
          problem: "Companies and logistics operations suffering from constant connectivity drops, generating operational bottlenecks and stoppages in daily activities.",
          action: "Complete reorganization of structured cabling and replacement of unmanaged switches with managed assets. Implementation of network segmentation (dedicated VLANs for ADM and Clients/Visitors), strategic distribution of new switches by sectors, expansion of signal reach and consulting for upgrade and sizing of internet links (ex: migration from 100Mb to 500Mb).",
          result: "80% reduction in connection incidents, delivering a stable, scalable and predictable network infrastructure.",
          tags: ["Networks", "Infrastructure", "Switches"],
        },
        {
          title: "Servers, Security and Backup System",
          problem: "Law, construction and food companies operating with vulnerable infrastructures: absence of centralized storage, outdated servers, critical data scattered on personal machines and networks exposed to security risks.",
          action: "Deployment of local servers with shared directories and strict access control policies (IAM). Establishment of automated hybrid backup routines (isolated local and cloud replication), with rigorous separation between corporate and personal use files. Critical update of operating systems and secure data migration.",
          result: "Zero data loss incidents. Access governance established and business continuity guaranteed \u2014 with agile and successful file restoration in scenarios of old hardware failures.",
          tags: ["Servers", "Hybrid Backup", "Security"],
        },
        {
          title: "IT Infrastructure for Medical and Veterinary Clinics",
          problem: "Health clinics with outdated equipment and disorganized infrastructure, impacting critical care systems and hindering team productivity in an environment where agility deals directly with lives.",
          action: "Upgrade and replacement of the machine park focused on performance for medical software. Restructuring and identification of racks and physical connections. Configuration of segmented Wi-Fi networks to isolate administrative traffic from patients, in addition to training and capacity building of the team for efficient use of new resources.",
          result: "Clean technological environment, in compliance with security requirements and with reliable connectivity, guaranteeing total fluidity in clinical and operational processes.",
          tags: ["Hospital IT", "Corporate Wi-Fi", "Hardware"],
        },
        {
          title: "Equipment Recovery and Optimization",
          problem: "Retail store computers operating with extreme slowness, outdated systems and complete absence of a technical care routine.",
          action: "Meticulous technical diagnosis, preventive physical maintenance (advanced internal cleaning and replacement of thermal components), update and optimization of operating systems and creation of a sustainable preventive maintenance schedule.",
          result: "Machines with optimized response time, elimination of crashes at POS/back office and increase in the useful life of company assets.",
          tags: ["Maintenance", "Optimization", "Hardware"],
        },
      ],
    },
    lab: {
      label: "Learning Lab",
      title: "Experiments & Studies",
      subtitle: "Hands-on projects I build to sharpen skills in Cloud, DevOps and Security.",
      items: [
        {
          title: "Serverless Architecture with AWS",
          description: "Development and deployment of a guessing game based on a 100% serverless architecture, using Amazon S3 for static frontend hosting, AWS Lambda for business logic processing, and API Gateway for HTTP request management. Project integrated with practical studies for AWS Developer Associate certification in partnership with Escola da Nuvem.",
          skills: [
            "Publication and distribution of static sites via S3.",
            "Creation, exposure and security of APIs with Lambda and API Gateway.",
            "CORS configuration and frontend/backend communication via HTTP calls.",
            "FinOps practices through the complete cycle of provisioning and deallocation of resources for cost optimization."
          ],
          images: ["/imgs/AWSAPI(1).jpg", "/imgs/AWSAPI(2).jpg", "/imgs/AWSAPI(3).jpg"]
        },
        {
          title: "Hardware Lab: PC Gamer Assembly and Setup",
          description: "Production of technical content and video documentation covering the complete cycle of assembly, cable management, stress testing and hardware validation for a high-performance station.",
          specs: [
            "Processor: Intel Core i5 10400",
            "Graphics: RTX 3050 Galax 8GB GDDR6",
            "Motherboard: H410M V2",
            "Memory: 16GB RAM (Dual Channel 8GB + 8GB)",
            "Storage: SSD NVMe M.2 500GB",
            "Power Supply: Redragon 600W"
          ],
          video: "https://youtu.be/zMTBcqZDCc4"
        },
        {
          title: "Infrastructure as Code and Containers (CloudMart)",
          description: "Implementation of an e-commerce application based on CloudMart architecture during The Cloud Bootcamp Multicloud challenge. The project consisted of automated provisioning of cloud infrastructure and deployment of containerized services in a Linux environment.",
          skills: [
            "Terraform for provisioning and versioning of infrastructure as code (IaC).",
            "Docker for creation, isolation and management of Frontend and Backend containers.",
            "Amazon DynamoDB for data persistence in scalable NoSQL database.",
            "Amazon EC2 for hosting the application's supporting infrastructure.",
            "Prompt Engineering (ChatGPT, Claude and Leonardo.ai) for code acceleration and asset generation."
          ],
          images: ["/imgs/AWSTERRA.jpg", "/imgs/AWSTERRA(2).jpg"]
        },
        {
          title: "IoT Simulation and Architecture in Cisco Packet Tracer",
          description: "Practical laboratory focused on designing and validating intelligent networks for Internet of Things (IoT). The environment simulates the real behavior of connected ecosystems, validating data flows from the physical ecosystem to application layers.",
          skills: [
            "Configuration, addressing and calibration of sensors and actuators.",
            "Implementation of local logical rules and network communication protocols.",
            "Integration of simulated data flows with cloud interfaces and edge servers."
          ],
          images: ["/imgs/IOT_Cisco.jpg"]
        }
      ],
    },
    contact: {
      title: "Open Space for Technical Connections and Partnerships",
      titleAccent: "",
      text: "The universe of infrastructure, cloud and DevOps culture evolves much faster when we share knowledge. If you're also an enthusiast of the area, want to debate modern architectures, exchange field experiences, or simply expand your professional network — the door is always open for a good technical conversation.",
      linkedinCta: "Connect on LinkedIn",
      githubCta: "GitHub",
      youtubeCta: "YouTube",
      instagramCta: "Instagram",
      tiktokCta: "TikTok",
    },
    footer: {
      copy: "Since © 2025 Gregory Porto — structuring systems, one layer at a time.",
    },
  },
  pt: {
    nav: {
      about: "Sobre",
      skills: "Habilidades",
      experience: "Experi\u00eancia",
      projects: "Projetos",
      lab: "Lab",
      contact: "Contato",
      cta: "Faça parte da minha rede",
    },
    hero: {
      label: "INFRAESTRUTURA \u00b7 CLOUD \u00b7 SEGURAN\u00c7A EM TI \u00b7 DEV",
      title: "Especialista em Infraestrutura ",
      titleAccent: "com foco em Cloud e DevOps",
      subtitle: "Mais de 10 anos de experi\u00eancia em suporte t\u00e9cnico, infraestrutura e ambientes corporativos.",
      description: "Profissional com s\u00f3lida base em redes, sistemas Windows e Linux, Microsoft 365 e seguran\u00e7a da informa\u00e7\u00e3o. Atualmente direcionando evolu\u00e7\u00e3o para Cloud, automa\u00e7\u00e3o e DevOps, unindo experi\u00eancia pr\u00e1tica de campo com aprendizado cont\u00ednuo para construir ambientes mais seguros, eficientes e escal\u00e1veis.",
      cta: "Fale Comigo",
    },
    about: {
      label: "Sobre Mim",
      title: "Gregory Porto",
      paragraphs: [
        "Atualmente atuo na área de TI da Alimentos Toscana, apoiando a evolução da infraestrutura tecnológica, suporte corporativo, organização de processos internos e sustentação operacional dos ambientes da empresa, incluindo TOTVS, redes, Microsoft 365 e soluções corporativas.",
        "Com mais de 10 anos de experiência em TI, atuei com suporte técnico, infraestrutura, redes, segurança da informação e sistemas empresariais. Tenho sólida bagagem na sustentação e implantação de diferentes arquiteturas de software, progredindo de soluções comerciais e verticais para grandes sistemas corporativos: TOTVS (ERP corporativo industrial atual), ContaAzul e Sisplan (ERPs otimizados para o setor de alimentos), HUB MoveEdu (ERP focado em gestão educacional e franquias) e i9PDV (automação comercial e frente de caixa).",
        "Sou Fuzileiro Naval da reserva com operações na Amazônia. Essa bagagem militar me trouxe experiências em cenários de alta pressão que desenvolveram disciplina rígida, resiliência extrema e rápida capacidade de adaptação.",
        "Hoje direciono minha evolução para Infraestrutura Moderna, Cloud, Automação, DevOps e Segurança da Informação, unindo experiência prática de campo com arquiteturas modernas e escaláveis.",
      ],
      focusLabel: "Foco atual",
      focusItems: [
        "Cloud Computing (AWS & Azure)",
        "Infraestrutura Corporativa",
        "Segurança da Informação",
        "DevOps & Automação",
        "Microsoft 365",
        "ERP TOTVS",
        "Redes e Serviços Corporativos",
        "Ambientes Windows & Linux",
      ],
    },
    skills: {
      label: "Compet\u00eancias",
      title: "Com o que eu trabalho",
      items: [
        { title: "Cloud Computing (AWS & Azure)", text: "Fundamentos s\u00f3lidos em AWS, operando solu\u00e7\u00f5es essenciais como EC2, S3, VPC, IAM e CloudWatch. Atualmente, lidero o estudo de viabilidade e planejamento para migra\u00e7\u00e3o e integra\u00e7\u00e3o de ambientes na Microsoft Azure, alinhando a infraestrutura \u00e0 nossa arquitetura Microsoft 365." },
        { title: "Redes & Infraestrutura modernizada", text: "Prospec\u00e7\u00e3o e sustenta\u00e7\u00e3o de redes corporativas. Experi\u00eancia pr\u00e1tica em cabeamento estruturado, configura\u00e7\u00e3o de switches, roteadores e firewalls. Atuo ativamente na segmenta\u00e7\u00e3o de redes (VLANs e Wi-Fi dedicado, como estruturas separadas para ADM e Guest), garantindo performance, seguran\u00e7a e alta disponibilidade para os setores." },
        { title: "Suporte, Sistemas & ERPs", text: "Gest\u00e3o completa de esta\u00e7\u00f5es de trabalho, troubleshooting avan\u00e7ado e administra\u00e7\u00e3o do ecossistema Microsoft 365. Viv\u00eancia na sustenta\u00e7\u00e3o operacional e parametriza\u00e7\u00e3o de m\u00faltiplos ERPs e sistemas comerciais, incluindo: TOTVS (sustenta\u00e7\u00e3o do ambiente atual no setor industrial de alimentos), ContaAzul & Sisplan (gest\u00e3o e suporte em ERPs focados em varejo e ind\u00fastria aliment\u00edcia), HUB MoveEdu (administra\u00e7\u00e3o de ERP verticalizado para redes de franquia e educa\u00e7\u00e3o) e i9PDV (automa\u00e7\u00e3o comercial, suporte e gerenciamento de frente de caixa)." },
        { title: "Ciberseguran\u00e7a Corporativa", text: "Aplica\u00e7\u00e3o pr\u00e1tica de pol\u00edticas de controle de acesso (IAM), gest\u00e3o e auditoria de rotinas de backup, prote\u00e7\u00e3o de endpoints e implementa\u00e7\u00e3o de boas pr\u00e1ticas de seguran\u00e7a digital customizadas para o cen\u00e1rio de PMEs." },
        { title: "DevOps, Automa\u00e7\u00e3o & Futuro (Em Evolu\u00e7\u00e3o)", text: "Foco direcionado para a cultura DevOps e infraestrutura como c\u00f3digo (IaC). Dom\u00ednio b\u00e1sico de Linux e Git. Atualmente, estruturo a base conceitual para a futura implementa\u00e7\u00e3o de containers (Docker) e esteiras de automa\u00e7\u00e3o (Pipelines CI/CD), conectando o aprendizado te\u00f3rico \u00e0s necessidades reais de evolu\u00e7\u00e3o tecnol\u00f3gica da empresa." },
        { title: "Consultoria T\u00e9cnica & Processos", text: "Avalia\u00e7\u00e3o cr\u00edtica de ambientes de TI, mapeamento de gargalos, recomenda\u00e7\u00f5es estrat\u00e9gicas de hardware/software, otimiza\u00e7\u00e3o de fluxos operacionais e alinhamento da tecnologia aos objetivos de neg\u00f3cio da empresa." },
      ],
    },
    experience: {
      label: "Experi\u00eancia Profissional",
      title: "Trajet\u00f3ria",
      roles: [
        {
          role: "Analista de Sistemas",
          company: "Alimentos Toscana",
          companyLink: "https://www.alimentostoscana.com.br/",
          period: "Nov 2025 \u2013 Atual",
          current: true,
          bullets: [
            "Gest\u00e3o e moderniza\u00e7\u00e3o do parque tecnol\u00f3gico, executando o ciclo completo de upgrade e substitui\u00e7\u00e3o de hardware focado em alta disponibilidade.",
            "Atua\u00e7\u00e3o estrat\u00e9gica na sustenta\u00e7\u00e3o e parametriza\u00e7\u00e3o dos ERPs TOTVS, ContaAzul e Sisplan, mapeando e otimizando processos para a escala e opera\u00e7\u00e3o do neg\u00f3cio.",
            "Arquitetura, governan\u00e7a de acessos e administra\u00e7\u00e3o do ecossistema de e-mails, liderando a migra\u00e7\u00e3o definitiva e capacita\u00e7\u00e3o dos usu\u00e1rios no ambiente Microsoft 365.",
            "Pesquisa, viabilidade e desenho t\u00e9cnico para futura implanta\u00e7\u00e3o de ferramentas com Intelig\u00eancia Artificial aplicadas \u00e0 opera\u00e7\u00e3o.",
          ],
        },
        {
          role: "Instrutor e Coordenador de TI",
          company: "Microlins",
          companyLink: "https://www.microlinsfloripa.com.br/",
          period: "2024 \u2013 2025",
          current: false,
          bullets: [
            "Doc\u00eancia em fundamentos de TI, arquitetura de redes e hardware, traduzindo conceitos complexos para diferentes n\u00edveis de aprendizado em ambas as institui\u00e7\u00f5es.",
            "Lideran\u00e7a e coordena\u00e7\u00e3o pedag\u00f3gica na Microlins, administrando o ERP HUB MoveEdu para controle de turmas, grades e indicadores de reten\u00e7\u00e3o.",
            "Desenvolvimento e adapta\u00e7\u00e3o de matrizes curriculares com foco total em aprendizado pr\u00e1tico e metodologia hands-on.",
          ],
        },
        {
          role: "Analista de Suporte Freelancer",
          company: "Aut\u00f4nomo",
          period: "2014 \u2013 2023",
          current: false,
          bullets: [
            "Atendimento consultivo especializado (presencial e remoto) focado em solu\u00e7\u00f5es de infraestrutura para PMEs e profissionais aut\u00f4nomos.",
            "Sustenta\u00e7\u00e3o t\u00e9cnica abrangente: implanta\u00e7\u00e3o de redes corporativas, seguran\u00e7a de dados, troubleshooting avan\u00e7ado e administra\u00e7\u00e3o de sistemas operacionais.",
            "Consolida\u00e7\u00e3o de uma carteira de clientes de longo prazo baseada em acordos de n\u00edvel de servi\u00e7o (SLA) confi\u00e1veis e eficientes.",
          ],
        },
        {
          role: "Representante Comercial B2B - i9PDV Sistemas",
          company: "i9PDV Sistemas",
          companyLink: "http://i9pdv.com",
          period: "2019 \u2013 2021",
          current: false,
          bullets: [
            "Consultoria t\u00e9cnica e apoio comercial estrat\u00e9gico focado na venda de sistemas de automa\u00e7\u00e3o comercial e faturamento (i9PDV).",
            "Atua\u00e7\u00e3o consultiva como ponte t\u00e9cnica, traduzindo as necessidades de neg\u00f3cio do cliente em requisitos de software de frente de caixa e retaguarda.",
          ],
        },
        {
          role: "Fuzileiro Naval",
          company: "Marinha do Brasil",
          period: "2005 \u2013 2010",
          current: false,
          bullets: [
            "Desenvolvimento de disciplina, trabalho em equipe e resili\u00eancia em ambientes de alta press\u00e3o",
            "Base de pensamento estruturado e execu\u00e7\u00e3o orientada a miss\u00e3o que se reflete no trabalho em TI",
          ],
        },
      ],
    },
    projects: {
      label: "Estudos de Caso",
      title: "Problemas resolvidos, resultados entregues.",
      items: [
        {
          title: "Reestrutura\u00e7\u00e3o de Rede Corporativa",
          problem: "Empresas e opera\u00e7\u00f5es log\u00edsticas sofrendo com quedas constantes de conectividade, gerando gargalos operacionais e paralisa\u00e7\u00f5es nas atividades di\u00e1rias.",
          action: "Reorganiza\u00e7\u00e3o completa do cabeamento estruturado e substitui\u00e7\u00e3o de switches n\u00e3o gerenci\u00e1veis por ativos gerenci\u00e1veis. Implementa\u00e7\u00e3o de segmenta\u00e7\u00e3o de rede (VLANs dedicadas para ADM e Clientes/Visitantes), distribui\u00e7\u00e3o estrat\u00e9gica de novos switches por setores, amplia\u00e7\u00e3o do alcance do sinal e consultoria para upgrade e dimensionamento de links de internet (ex: migra\u00e7\u00e3o de 100Mb para 500Mb).",
          result: "Redu\u00e7\u00e3o de 80% nos incidentes de conex\u00e3o, entregando uma infraestrutura de rede est\u00e1vel, escal\u00e1vel e previs\u00edvel.",
          tags: ["Redes", "Infraestrutura", "Switches"],
        },
        {
          title: "Servidores, Seguran\u00e7a e Sistema de Backup",
          problem: "Empresas de advocacia, constru\u00e7\u00e3o e alimentos operando com infraestruturas vulner\u00e1veis: aus\u00eancia de armazenamento centralizado, servidores defasados, dados cr\u00edticos espalhados em m\u00e1quinas pessoais e redes expostas a riscos de seguran\u00e7a.",
          action: "Implanta\u00e7\u00e3o de servidores locais com diret\u00f3rios compartilhados e pol\u00edticas r\u00edgidas de controle de acesso (IAM). Estabelecimento de rotinas automatizadas de backup h\u00edbrido (local isolado e replica\u00e7\u00e3o em nuvem), com separa\u00e7\u00e3o rigorosa entre arquivos corporativos e de uso pessoal. Atualiza\u00e7\u00e3o cr\u00edtica de sistemas operacionais e migra\u00e7\u00e3o segura de dados.",
          result: "Zero incidentes de perda de dados. Governan\u00e7a de acessos estabelecida e continuidade de neg\u00f3cios garantida \u2014 com restaura\u00e7\u00e3o \u00e1gil e bem-sucedida de arquivos em cen\u00e1rios de falha de hardwares antigos.",
          tags: ["Servidores", "Backup H\u00edbrido", "Seguran\u00e7a"],
        },
        {
          title: "Infraestrutura de TI para Cl\u00ednicas M\u00e9dicas e Veterin\u00e1rias",
          problem: "Cl\u00ednicas de sa\u00fade com equipamentos desatualizados e infraestrutura desorganizada, impactando sistemas cr\u00edticos de atendimento e prejudicando a produtividade da equipe em um ambiente onde a agilidade lida diretamente com vidas.",
          action: "Upgrade e substitui\u00e7\u00e3o do parque de m\u00e1quinas focado em performance para softwares m\u00e9dicos. Reestrutura\u00e7\u00e3o e identifica\u00e7\u00e3o de racks e conex\u00f5es f\u00edsicas. Configura\u00e7\u00e3o de redes Wi-Fi segmentadas para isolar o tr\u00e1fego administrativo dos pacientes, al\u00e9m de treinamento e capacita\u00e7\u00e3o da equipe para uso eficiente dos novos recursos.",
          result: "Ambiente tecnol\u00f3gico limpo, em conformidade com requisitos de seguran\u00e7a e com conectividade confi\u00e1vel, garantindo fluidez total nos processos cl\u00ednicos e operacionais.",
          tags: ["TI Hospitalar", "Wi-Fi Corporativo", "Hardware"],
        },
        {
          title: "Recupera\u00e7\u00e3o e Otimiza\u00e7\u00e3o de Equipamentos",
          problem: "Computadores de com\u00e9rcio varejista operando com extrema lentid\u00e3o, sistemas desatualizados e aus\u00eancia completa de uma rotina de cuidados t\u00e9cnicos.",
          action: "Diagn\u00f3stico t\u00e9cnico minucioso, manuten\u00e7\u00e3o f\u00edsica preventiva (limpeza interna avan\u00e7ada e troca de componentes t\u00e9rmicos), atualiza\u00e7\u00e3o e otimiza\u00e7\u00e3o de sistemas operacionais e cria\u00e7\u00e3o de um cronograma sustent\u00e1vel de manuten\u00e7\u00e3o preventiva.",
          result: "M\u00e1quinas com tempo de resposta otimizado, elimina\u00e7\u00e3o de travamentos no PDV/retaguarda e aumento do tempo de vida \u00fatil dos ativos da empresa.",
          tags: ["Manuten\u00e7\u00e3o", "Otimiza\u00e7\u00e3o", "Hardware"],
        },
      ],
    },
    lab: {
      label: "Laborat\u00f3rio",
      title: "Experimentos & Estudos",
      subtitle: "Projetos pr\u00e1ticos que construo para aprimorar habilidades em Cloud, DevOps e Seguran\u00e7a.",
      items: [
        {
          title: "Arquitetura Serverless com AWS",
          description: "Desenvolvimento e disponibilização de um jogo de adivinhação baseado em uma arquitetura 100% serverless, utilizando Amazon S3 para hospedagem do frontend estático, AWS Lambda para processamento da lógica de negócios e API Gateway para o gerenciamento das requisições HTTP. Projeto integrado aos estudos práticos para a certificação AWS Developer Associate em parceria com a Escola da Nuvem.",
          skills: [
            "Publicação e distribuição de sites estáticos via S3.",
            "Criação, exposição e segurança de APIs com Lambda e API Gateway.",
            "Configuração de CORS e comunicação frontend/backend via chamadas HTTP.",
            "Práticas de FinOps através do ciclo completo de provisionamento e desalocação de recursos para otimização de custos."
          ],
          images: ["/imgs/AWSAPI(1).jpg", "/imgs/AWSAPI(2).jpg", "/imgs/AWSAPI(3).jpg"]
        },
        {
          title: "Lab de Hardware: Montagem e Setup PC Gamer",
          description: "Produção de conteúdo técnico e documentação em vídeo cobrindo o ciclo completo de montagem, gerenciamento de cabos, testes de estresse e validação de hardware para uma estação de alto desempenho.",
          specs: [
            "Processador: Intel Core i5 10400",
            "Gráficos: RTX 3050 Galax 8GB GDDR6",
            "Placa-Mãe: H410M V2",
            "Memória: 16GB RAM (Dual Channel 8GB + 8GB)",
            "Armazenamento: SSD NVMe M.2 500GB",
            "Alimentação: Fonte Redragon 600W"
          ],
          video: "https://youtu.be/zMTBcqZDCc4"
        },
        {
          title: "Infraestrutura como Código e Containers (CloudMart)",
          description: "Implementação de uma aplicação de e-commerce baseada na arquitetura CloudMart durante o desafio The Cloud Bootcamp Multicloud. O projeto consistiu no provisionamento automatizado da infraestrutura em nuvem e no deploy de serviços conteinerizados em ambiente Linux.",
          skills: [
            "Terraform para o provisionamento e versionamento da infraestrutura como código (IaC).",
            "Docker para a criação, isolamento e gerenciamento dos containers de Frontend e Backend.",
            "Amazon DynamoDB para persistência de dados em banco NoSQL escalável.",
            "Amazon EC2 para hospedagem da infraestrutura de sustentação da aplicação.",
            "Engenharia de Prompt (ChatGPT, Claude e Leonardo.ai) para aceleração de código e geração de assets."
          ],
          images: ["/imgs/AWSTERRA.jpg", "/imgs/AWSTERRA(2).jpg"]
        },
        {
          title: "Simulação e Arquitetura IoT no Cisco Packet Tracer",
          description: "Laboratório prático voltado ao desenho e validação de redes inteligentes para Internet das Coisas (IoT). O ambiente simula o comportamento real de ecossistemas conectados, validando fluxos de dados do ecossistema físico até as camadas de aplicação.",
          skills: [
            "Configuração, endereçamento e calibração de sensores e atuadores.",
            "Implementação de regras lógicas locais e protocolos de comunicação de rede.",
            "Integração de fluxos de dados simulados com interfaces de nuvem e servidores de borda."
          ],
          images: ["/imgs/IOT_Cisco.jpg"]
        }
      ],
    },
    contact: {
      title: "Espaço Aberto para Conexões e Parcerias Técnicas",
      titleAccent: "",
      text: "O universo de infraestrutura, cloud e cultura DevOps evolui muito mais rápido quando compartilhamos conhecimento. Se você também é entusiasta da área, quer debater sobre arquiteturas modernas, trocar experiências de campo ou simplesmente expandir sua rede profissional — a porta está sempre aberta para uma boa conversa técnica.",
      linkedinCta: "Conectar no LinkedIn",
      githubCta: "GitHub",
      youtubeCta: "YouTube",
      instagramCta: "Instagram",
      tiktokCta: "TikTok",
    },
    footer: {
      copy: "Since © 2025 Gregory Porto — structuring systems, one layer at a time.",
    },
  },
  fr: {
    nav: {
      about: "\u00c0 propos",
      skills: "Comp\u00e9tences",
      experience: "Exp\u00e9rience",
      projects: "Projets",
      lab: "Labo",
      contact: "Contact",
      cta: "Me contacter",
    },
    hero: {
      label: "INFRASTRUCTURE \u00b7 CLOUD \u00b7 S\u00c9CURIT\u00c9 TI \u00b7 DEV",
      title: "Sp\u00e9cialiste Infrastructure ",
      titleAccent: "avec focus sur Cloud et DevOps",
      subtitle: "Plus de 10 ans d\u2019exp\u00e9rience en soutien technique, infrastructure et environnements corporatifs.",
      description: "Professionnel avec solide base en r\u00e9seautique, syst\u00e8mes Windows et Linux, Microsoft 365 et s\u00e9curit\u00e9 de l\u2019information. Dirige actuellement l\u2019\u00e9volution vers Cloud, automatisation et DevOps, combinant exp\u00e9rience pratique de terrain avec apprentissage continu pour construire des environnements plus s\u00e9curis\u00e9s, efficaces et \u00e9volutifs.",
      cta: "Me contacter",
    },
    about: {
      label: "À propos",
      title: "Gregory Porto",
      paragraphs: [
        "J'occupe actuellement un poste dans le département informatique de l'entreprise Alimentos Toscana, où je soutiens l'évolution de l'infrastructure technologique, le support aux utilisateurs, l'organisation des processus internes et la stabilité opérationnelle des environnements de l'entreprise, notamment TOTVS, les réseaux, Microsoft 365 et les solutions d'entreprise.",
        "Avec plus de 10 ans d'expérience en TI, j'ai travaillé avec le support technique, l'infrastructure, les réseaux, la sécurité de l'information et les systèmes d'entreprise. J'ai une solide expérience dans la sustentation et l'implémentation de différentes architectures logicielles, progressant de solutions commerciales et verticales vers de grands systèmes corporatifs: TOTVS (ERP corporatif industriel actuel), ContaAzul et Sisplan (ERPs optimisés pour le secteur alimentaire), HUB MoveEdu (ERP axé sur la gestion éducative et les franchises) et i9PDV (automatisation commerciale et point de vente).",
        "Je suis Fusilier Marin de réserve avec des opérations en Amazonie. Ce bagage militaire m'a apporté des expériences dans des scénarios de haute pression qui ont développé une discipline rigoureuse, une résilience extrême et une capacité d'adaptation rapide.",
        "Aujourd'hui, je dirige mon évolution professionnelle vers l'Infrastructure Moderne, le Cloud, l'Automatisation, le DevOps et la Sécurité de l'Information, alliant une expérience pratique de terrain à des architectures modernes et évolutives.",
      ],
      focusLabel: "Focus actuel",
      focusItems: [
        "Cloud Computing (AWS & Azure)",
        "Infrastructure d'Entreprise",
        "Sécurité de l'Information",
        "DevOps & Automatisation",
        "Microsoft 365",
        "ERP TOTVS",
        "Réseaux & Services d'Entreprise",
        "Environnements Windows & Linux",
      ],
    },
    skills: {
      label: "Comp\u00e9tences",
      title: "Avec quoi je travaille",
      items: [
        { title: "Cloud Computing (AWS & Azure)", text: "Fondements solides en AWS, op\u00e9rant des solutions essentielles comme EC2, S3, VPC, IAM et CloudWatch. Actuellement, je dirige l'\u00e9tude de faisabilit\u00e9 et la planification pour la migration et l'int\u00e9gration d'environnements vers Microsoft Azure, alignant l'infrastructure \u00e0 notre architecture Microsoft 365." },
        { title: "R\u00e9seaux & Infrastructure modernis\u00e9e", text: "Prospection et sustentation de r\u00e9seaux corporatifs. Exp\u00e9rience pratique en c\u00e2blage structur\u00e9, configuration de commutateurs, routeurs et pare-feu. J'agis activement dans la segmentation de r\u00e9seaux (VLANs et Wi-Fi d\u00e9di\u00e9, comme structures s\u00e9par\u00e9es pour ADM et Guest), garantissant performance, s\u00e9curit\u00e9 et haute disponibilit\u00e9 pour les secteurs." },
        { title: "Soutien, Syst\u00e8mes & ERPs", text: "Gestion compl\u00e8te de postes de travail, d\u00e9pannage avanc\u00e9 et administration de l'\u00e9cosyst\u00e8me Microsoft 365. Exp\u00e9rience dans la sustentation op\u00e9rationnelle et param\u00e9trage de multiples ERPs et syst\u00e8mes commerciaux, incluant: TOTVS (sustentation de l'environnement actuel dans le secteur industriel alimentaire), ContaAzul & Sisplan (gestion et soutien en ERPs focalis\u00e9s sur le commerce de d\u00e9tail et l'industrie alimentaire), HUB MoveEdu (administration d'ERP verticalis\u00e9 pour r\u00e9seaux de franchise et \u00e9ducation) et i9PDV (automatisation commerciale, soutien et gestion de point de vente)." },
        { title: "Cybers\u00e9curit\u00e9 Corporative", text: "Application pratique de politiques de contr\u00f4le d'acc\u00e8s (IAM), gestion et audit de routines de sauvegarde, protection des terminaux et impl\u00e9mentation de bonnes pratiques de s\u00e9curit\u00e9 num\u00e9rique personnalis\u00e9es pour le sc\u00e9nario de PME." },
        { title: "DevOps, Automatisation & Futur (En \u00c9volution)", text: "Focus dirig\u00e9 vers la culture DevOps et infrastructure comme code (IaC). Connaissance de base de Linux et Git. Actuellement, je structure la base conceptuelle pour la future impl\u00e9mentation de containers (Docker) et pipelines d'automatisation (CI/CD), connectant l'apprentissage th\u00e9orique aux besoins r\u00e9els d'\u00e9volution technologique de l'entreprise." },
        { title: "Consultation Technique & Processus", text: "\u00c9valuation critique d'environnements TI, cartographie de goulots d'\u00e9tranglement, recommandations strat\u00e9giques de mat\u00e9riel/logiciel, optimisation de flux op\u00e9rationnels et alignement de la technologie aux objectifs d'affaires de l'entreprise." },
      ],
    },
    experience: {
      label: "Exp\u00e9rience professionnelle",
      title: "Parcours",
      roles: [
        {
          role: "Analyste de syst\u00e8mes",
          company: "Alimentos Toscana",
          companyLink: "https://www.alimentostoscana.com.br/",
          period: "Nov 2025 \u2013 Pr\u00e9sent",
          current: true,
          bullets: [
            "Gestion et modernisation du parc technologique, ex\u00e9cutant le cycle complet de mise \u00e0 niveau et remplacement de mat\u00e9riel focalis\u00e9 sur la haute disponibilit\u00e9.",
            "Action strat\u00e9gique dans la sustentation et param\u00e9trage des ERPs TOTVS, ContaAzul et Sisplan, cartographiant et optimisant les processus pour l'\u00e9chelle et l'op\u00e9ration du n\u00e9goce.",
            "Architecture, gouvernance d'acc\u00e8s et administration de l'\u00e9cosyst\u00e8me de courriels, dirigeant la migration d\u00e9finitive et la formation des utilisateurs dans l'environnement Microsoft 365.",
            "Recherche, faisabilit\u00e9 et conception technique pour future impl\u00e9mentation d'outils avec Intelligence Artificielle appliqu\u00e9s \u00e0 l'op\u00e9ration.",
          ],
        },
        {
          role: "Instructeur et coordonnateur TI",
          company: "Microlins",
          companyLink: "https://www.microlinsfloripa.com.br/",
          period: "2024 \u2013 2025",
          current: false,
          bullets: [
            "Enseignement des fondamentaux TI, architecture de r\u00e9seaux et mat\u00e9riel, traduisant des concepts complexes pour diff\u00e9rents niveaux d'apprentissage dans les deux institutions.",
            "Leadership et coordination p\u00e9dagogique \u00e0 Microlins, administrant l'ERP HUB MoveEdu pour contr\u00f4le de classes, grilles et indicateurs de r\u00e9tention.",
            "D\u00e9veloppement et adaptation de matrices curriculaires avec focus total sur l'apprentissage pratique et m\u00e9thodologie hands-on.",
          ],
        },
        {
          role: "Analyste de soutien TI (autonome)",
          company: "Travailleur autonome",
          period: "2014 \u2013 2023",
          current: false,
          bullets: [
            "Service consultatif sp\u00e9cialis\u00e9 (sur site et \u00e0 distance) focalis\u00e9 sur solutions d'infrastructure pour PME et professionnels autonomes.",
            "Sustentation technique exhaustive: impl\u00e9mentation de r\u00e9seaux corporatifs, s\u00e9curit\u00e9 de donn\u00e9es, d\u00e9pannage avanc\u00e9 et administration de syst\u00e8mes op\u00e9rationnels.",
            "Consolidation d'un portefeuille de clients \u00e0 long terme bas\u00e9 sur des accords de niveau de service (SLA) fiables et efficaces.",
          ],
        },
        {
          role: "Repr\u00e9sentant Commercial B2B - Syst\u00e8mes i9PDV",
          company: "Syst\u00e8mes i9PDV",
          companyLink: "http://i9pdv.com",
          period: "2019 \u2013 2021",
          current: false,
          bullets: [
            "Consultation technique et soutien commercial strat\u00e9gique focalis\u00e9 sur la vente de syst\u00e8mes d'automatisation commerciale et facturation (i9PDV).",
            "Action consultative comme pont technique, traduisant les besoins d'affaires du client en exigences de logiciel de point de vente et arri\u00e8re-boutique.",
          ],
        },
        {
          role: "Fusilier marin",
          company: "Marine du Br\u00e9sil",
          period: "2005 \u2013 2010",
          current: false,
          bullets: [
            "D\u00e9veloppement de la discipline, du travail d\u2019\u00e9quipe et de la r\u00e9silience en environnement haute pression",
            "Base de pens\u00e9e structur\u00e9e et d\u2019ex\u00e9cution orient\u00e9e mission, transpos\u00e9e dans le travail en TI",
          ],
        },
      ],
    },
    projects: {
      label: "\u00c9tudes de Cas",
      title: "Probl\u00e8mes r\u00e9solus, r\u00e9sultats livr\u00e9s.",
      items: [
        {
          title: "Restructuration du R\u00e9seau Corporatif",
          problem: "Entreprises et op\u00e9rations logistiques souffrant de chutes constantes de connectivit\u00e9, g\u00e9n\u00e9rant des goulots d'\u00e9tranglement op\u00e9rationnels et des arr\u00eats dans les activit\u00e9s quotidiennes.",
          action: "R\u00e9organisation compl\u00e8te du c\u00e2blage structur\u00e9 et remplacement des commutateurs non g\u00e9r\u00e9s par des actifs g\u00e9r\u00e9s. Impl\u00e9mentation de segmentation de r\u00e9seau (VLANs d\u00e9di\u00e9s pour ADM et Clients/Visiteurs), distribution strat\u00e9gique de nouveaux commutateurs par secteurs, expansion de la port\u00e9e du signal et consultation pour upgrade et dimensionnement de liens internet (ex: migration de 100Mb vers 500Mb).",
          result: "R\u00e9duction de 80% des incidents de connexion, livrant une infrastructure de r\u00e9seau stable, \u00e9volutive et pr\u00e9visible.",
          tags: ["R\u00e9seaux", "Infrastructure", "Commutateurs"],
        },
        {
          title: "Serveurs, S\u00e9curit\u00e9 et Syst\u00e8me de Sauvegarde",
          problem: "Entreprises d'avocat, construction et aliments op\u00e9rant avec infrastructures vuln\u00e9rables: absence de stockage centralis\u00e9, serveurs d\u00e9su\u00e9s, donn\u00e9es critiques dispers\u00e9es sur machines personnelles et r\u00e9seaux expos\u00e9s \u00e0 des risques de s\u00e9curit\u00e9.",
          action: "Impl\u00e9mentation de serveurs locaux avec r\u00e9pertoires partag\u00e9s et politiques rigides de contr\u00f4le d'acc\u00e8s (IAM). \u00c9tablissement de routines automatis\u00e9es de sauvegarde hybride (local isol\u00e9 et r\u00e9plication dans le cloud), avec s\u00e9paration rigoureuse entre fichiers corporatifs et d'usage personnel. Mise \u00e0 jour critique de syst\u00e8mes op\u00e9rationnels et migration s\u00e9curis\u00e9e de donn\u00e9es.",
          result: "Z\u00e9ro incident de perte de donn\u00e9es. Gouvernance d'acc\u00e8s \u00e9tablie et continuit\u00e9 de n\u00e9goce garantie \u2014 avec restauration agile et r\u00e9ussie de fichiers dans des sc\u00e9narios de panne de mat\u00e9riels anciens.",
          tags: ["Serveurs", "Sauvegarde Hybride", "S\u00e9curit\u00e9"],
        },
        {
          title: "Infrastructure TI pour Cliniques M\u00e9dicales et V\u00e9t\u00e9rinaires",
          problem: "Cliniques de sant\u00e9 avec \u00e9quipements d\u00e9su\u00e9s et infrastructure d\u00e9sorganis\u00e9e, impactant syst\u00e8mes critiques d'assistance et pr\u00e9judiquant la productivit\u00e9 de l'\u00e9quipe dans un environnement o\u00f9 l'agilit\u00e9 traite directement avec des vies.",
          action: "Upgrade et remplacement du parc de machines focalis\u00e9 sur performance pour logiciels m\u00e9dicaux. Restructuration et identification de racks et connexions physiques. Configuration de r\u00e9seaux Wi-Fi segment\u00e9s pour isoler le trafic administratif des patients, en plus de formation et capacit\u00e9 de l'\u00e9quipe pour usage efficace des nouveaux ressources.",
          result: "Environnement technologique propre, en conformit\u00e9 avec exigences de s\u00e9curit\u00e9 et avec connectivit\u00e9 fiable, garantissant fluidit\u00e9 totale dans les processus cliniques et op\u00e9rationnels.",
          tags: ["TI Hospitalier", "Wi-Fi Corporatif", "Mat\u00e9riel"],
        },
        {
          title: "R\u00e9cup\u00e9ration et Optimisation d'\u00c9quipements",
          problem: "Ordinateurs de commerce de d\u00e9tail op\u00e9rant avec extr\u00eamme lenteur, syst\u00e8mes d\u00e9su\u00e9s et absence compl\u00e8te d'une routine de soins techniques.",
          action: "Diagnostic technique minutieux, maintenance physique pr\u00e9ventive (nettoyage interne avanc\u00e9 et remplacement de composants thermiques), mise \u00e0 jour et optimisation de syst\u00e8mes op\u00e9rationnels et cr\u00e9ation d'un calendrier soutenable de maintenance pr\u00e9ventive.",
          result: "Machines avec temps de r\u00e9ponse optimis\u00e9, \u00e9limination de blocages au PDV/arri\u00e8re-boutique et augmentation de la dur\u00e9e de vie utile des actifs de l'entreprise.",
          tags: ["Maintenance", "Optimisation", "Mat\u00e9riel"],
        },
      ],
    },
    lab: {
      label: "Laboratoire",
      title: "Exp\u00e9riences & \u00c9tudes",
      subtitle: "Projets pratiques que je construis pour affiner mes comp\u00e9tences en Cloud, DevOps et S\u00e9curit\u00e9.",
      items: [
        { title: "AWS VPC \u00e0 partir de z\u00e9ro", text: "Construction d\u2019un VPC complet avec sous-r\u00e9seaux publics/priv\u00e9s, passerelle NAT et groupes de s\u00e9curit\u00e9 pour simuler une application web." },
        { title: "Environnements Docker Compose", text: "Cr\u00e9ation de configurations multi-conteneurs pour le d\u00e9veloppement et les tests, incluant serveurs web, bases de donn\u00e9es et outils de surveillance." },
        { title: "Durcissement de serveur Linux", text: "Configuration d\u2019un serveur Debian avec authentification SSH par cl\u00e9, fail2ban, r\u00e8gles UFW et mises \u00e0 jour de s\u00e9curit\u00e9 automatis\u00e9es." },
        { title: "Pipeline CI/CD avec GitHub Actions", text: "Mise en place de flux automatis\u00e9s de build, test et d\u00e9ploiement pour comprendre la livraison continue en pratique." },
      ],
    },
    contact: {
      title: "Connectons-nous et ",
      titleAccent: "b\u00e2tissons quelque chose de solide.",
      text: "Que vous ayez besoin de soutien en infrastructure, de conseils infonuagiques, ou que vous vouliez simplement \u00e9changer des id\u00e9es \u2014 je suis ouvert aux conversations.",
      linkedinCta: "Se connecter sur LinkedIn",
      instagramCta: "Instagram",
    },
    footer: {
      copy: "Since © 2025 Gregory Porto — structuring systems, one layer at a time.",
    },
  },
};

export default translations;
