'use client';
import Image from 'next/image';
// import HeroComponent from '../components/HeroComponent';
import ImageCard from '../components/ImageCard';
import { WHYHAWKSTACK } from '../components/constants';
import PartnersCarousel from '../components/PartnersCarousel';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      {/* <HeroComponent
        heading="Empowering Digital Transformation with AI Agents, Multicloud Mastery, and Automation Excellence."
        // buttonText="SEE WHAT WE DO"
        // onButtonClick={handleClick}
      /> */}

      {/* Approach Section */}
      <section className="mt-16 px-25">
        <h2 className="text-4xl text-center mb-6">HawkStack's Approach</h2>
        <p className="text-center text-md text-gray-400">
          HawkStack’s Approach combines engineering precision, breakthrough
          innovation, and deep insights to accelerate your digital journey.
        </p>
      </section>

      {/* Image Cards Section */}
      <section className="flex flex-wrap justify-center gap-8 mt-16 px-25">
        <ImageCard
          imageSrc="/images/framework.webp"
          title="Logic's Framework"
          description="HawkStack applies precision-engineered frameworks and advanced analytics to ensure resilience and scalability for complex environments."
        />
        <ImageCard
          imageSrc="/images/leap.webp"
          title="Innovation’s Leap"
          description="HawkStack fuels innovation with data-driven insights, agile delivery, and cutting-edge technologies that help you stay ahead."
        />
        <ImageCard
          imageSrc="/images/depth.webp"
          title="Insight’s Depth"
          description="HawkStack reveals actionable intelligence through advanced data mining, predictive analytics, and modeling to guide smart decisions."
        />
      </section>

      {/* Expertise Section */}
      <section className="mt-16 px-25">
        <h2 className="text-4xl text-center mb-6">HawkStack's Services</h2>
        <p className="text-center text-md text-gray-400 mb-12">
          Discover Hawkstack’s expertise in IT automation, cloud-native
          development, DevOps support, modern monitoring, and AI & Machine
          Learning services. We deliver tailored solutions that optimize your
          operations, enhance efficiency, and drive innovation.
        </p>
        <div className="flex flex-col gap-16">
          <article className="flex flex-col md:flex-row items-start gap-8">
            <Image
              src="/images/automation.webp"
              alt="Automation"
              width={310}
              height={310}
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">IT Automation</h3>
              <p className="text-gray-500">
                HawkStack’s IT automation services boost efficiency by reducing
                manual effort. We specialize in configuration management
                (Ansible, Puppet, Chef), infrastructure automation (Terraform,
                AWS CloudFormation), orchestration (Kubernetes, Jenkins), and
                scripting (Python, Shell). Our expertise also includes
                monitoring, API automation, GitOps, and ChatOps. Streamline your
                IT with HawkStack.
              </p>
            </div>
          </article>

          <article className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">
                Kubernetes Service Providers
              </h3>
              <p className="text-gray-500">
                HawkStack simplifies Kubernetes deployments, management, and
                scaling with end-to-end solutions. Our expertise spans
                orchestration, Docker containerization, and multi-cluster
                management (Kubeadm, Rancher, OpenShift). We leverage CI/CD
                tools like Jenkins and ArgoCD, enhance security with Istio, and
                optimize monitoring with Prometheus and Grafana. Trust HawkStack
                for scalable and efficient Kubernetes solutions.
              </p>
            </div>
            <Image
              src="/images/ksp.webp"
              alt="Kubernetes Service Providers"
              width={310}
              height={310}
            />
          </article>

          <article className="flex flex-col md:flex-row items-start gap-8">
            <Image
              src="/images/cn.webp"
              alt="Cloud Native"
              width={310}
              height={310}
            />
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Cloud Native</h3>
              <p className="text-gray-500">
                HawkStack empowers businesses with cloud-native solutions,
                enhancing performance and scalability. We specialize in Docker,
                Kubernetes, Helm, and service mesh technologies like Istio. Our
                CI/CD automation expertise includes Jenkins and ArgoCD, ensuring
                seamless deployments. We optimize cloud infrastructure with
                Terraform and leading cloud providers (AWS, Azure, GCP), plus
                robust monitoring. Build agile, secure cloud-native apps with
                HawkStack.
              </p>
            </div>
          </article>

          <article className="flex flex-col md:flex-row items-start gap-8">
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-semibold">Modern Monitoring</h3>
              <p className="text-gray-500">
                HawkStack provides modern IT monitoring solutions for high
                performance and reliability. We specialize in real-time
                monitoring with Prometheus and Grafana, plus centralized log
                management using ELK and Splunk. Our alerting systems
                (Alertmanager, PagerDuty) enable proactive issue detection, and
                we optimize distributed tracing with Jaeger and Zipkin. Cloud
                monitoring across AWS and Azure ensures seamless performance.
                Trust HawkStack for advanced monitoring and rapid incident
                resolution.
              </p>
            </div>
            <Image
              src="/images/monitoring.webp"
              alt="Modern Monitoring"
              width={310}
              height={310}
            />
          </article>
        </div>
      </section>

      {/* Why Hawkstack Section */}
      <section className="py-16 bg-white text-gray-800">
      <div className="text-center mb-12">
        <h2 className="text-4xl text-center mb-6">Why Choose HawkStack?</h2>
      </div>

      <div className="relative flex flex-col lg:flex-row items-center justify-center gap-12 px-4 max-w-7xl mx-auto">
        {/* Left Column */}
        <div className="flex flex-col gap-8 lg:w-1/3">
          {WHYHAWKSTACK
            .filter((f) => f.position.includes('left'))
            .map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
        </div>

        {/* Center Image */}
        <div className="relative w-[300px] h-[300px] md:w-[400px] md:h-[400px]">
          <Image
            src="/images/whyHawkstack.webp"
            alt="Center Illustration"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-8 lg:w-1/3">
          {WHYHAWKSTACK
            .filter((f) => f.position.includes('right'))
            .map((item, idx) => (
              <div key={idx} className="bg-white p-6 rounded-xl shadow-md">
                <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm">{item.description}</p>
              </div>
            ))}
        </div>
      </div>
    </section>
    <PartnersCarousel />
    <Footer />
    </>
  );
}
