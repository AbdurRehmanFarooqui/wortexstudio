"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  ShieldCheck,
  Database,
  Cookie,
  Globe2,
  LockKeyhole,
  Mail,
  Bot,
  UserRound,
  FileText,
  Eye,
  Scale,
  Clock,
} from "lucide-react";

const toc = [
  { id: "overview", label: "01 / Overview" },
  { id: "information", label: "02 / Information We Collect" },
  { id: "sources", label: "03 / How We Collect It" },
  { id: "uses", label: "04 / How We Use Information" },
  { id: "legal-bases", label: "05 / Legal Bases" },
  { id: "cookies", label: "06 / Cookies & Analytics" },
  { id: "ai", label: "07 / AI & Automation" },
  { id: "sharing", label: "08 / When We Share Data" },
  { id: "transfers", label: "09 / International Transfers" },
  { id: "retention", label: "10 / Data Retention" },
  { id: "security", label: "11 / Security" },
  { id: "client-data", label: "12 / Client Project Data" },
  { id: "rights", label: "13 / Your Rights & Choices" },
  { id: "marketing", label: "14 / Marketing Messages" },
  { id: "third-party", label: "15 / Third-Party Websites" },
  { id: "children", label: "16 / Children’s Privacy" },
  { id: "changes", label: "17 / Policy Updates" },
  { id: "contact", label: "18 / Contact Us" },
];

type PolicySection = {
  id: string;
  title: string;
  icon: React.ReactNode;
  content: React.ReactNode;
};

const policySections: PolicySection[] = [
  {
    id: "overview",
    title: "Overview & Scope",
    icon: <ShieldCheck size={19} />,
    content: (
      <>
        <p>
          This Privacy Policy explains how WORTEX STUDIO ("WORTEX," "we," "us," or
          "our") collects, uses, stores, and shares personal information when you visit
          our website, contact us, request a proposal, engage our services, or otherwise
          interact with us.
        </p>
        <p>
          WORTEX provides digital services that may include website and software
          development, UI/UX design, 3D and visual experiences, AI integration and
          automation, e-commerce, deployment, analytics, SEO, and digital marketing.
          The information we handle depends on the service you request and how you
          interact with us.
        </p>
        <p>
          This policy applies to our own website and business interactions. It does not
          automatically replace the privacy notice of a client website, application, or
          system that we build or maintain. Where we process personal information on a
          client’s instructions, our role and responsibilities may also be defined in a
          project agreement or data-processing addendum.
        </p>
        <p>
          This notice does not itself provide consent for any activity that legally
          requires consent. Where applicable law requires consent for a particular
          activity, we will request it separately.
        </p>
      </>
    ),
  },
  {
    id: "information",
    title: "Information We Collect",
    icon: <Database size={19} />,
    content: (
      <>
        <p>Depending on your interaction with WORTEX, we may collect the following categories of information:</p>
        <ul>
          <li>
            <strong>Contact and identity details:</strong> your name, business name,
            business email, phone number, job title, country or general location, and the
            contact details you choose to provide.
          </li>
          <li>
            <strong>Enquiry and project information:</strong> service interests, project
            scope, goals, requirements, budget range, timelines, feedback, proposals,
            agreements, and information you send through a contact form, email, social
            platform, or messaging service.
          </li>
          <li>
            <strong>Client materials:</strong> files, text, images, brand assets, product
            information, credentials, datasets, or other content you provide for a
            project. Please do not send passwords or highly sensitive personal
            information through ordinary contact forms or email unless we have agreed a
            suitable method.
          </li>
          <li>
            <strong>Billing and transaction records:</strong> invoice details, payment
            status, transaction references, billing address, and records needed for
            accounting or tax purposes. Payments may be handled by an independent
            payment provider; we do not need to receive your full card number or card
            security code to record a payment.
          </li>
          <li>
            <strong>Technical and usage information:</strong> IP address, device and
            browser type, operating system, referring page, pages visited, approximate
            location inferred from technical data, timestamps, diagnostic logs, and
            information collected through cookies or similar technologies where enabled.
          </li>
          <li>
            <strong>Preferences and correspondence:</strong> your communication
            preferences, support requests, survey responses, and any information you
            choose to share when speaking with us.
          </li>
        </ul>
        <p>
          We do not intentionally ask for sensitive personal information (for example,
          government identification numbers, health information, precise location data,
          or information about children) through our general enquiry channels. If a
          project genuinely requires such information, the purpose, access controls,
          and handling arrangements should be agreed before it is provided.
        </p>
      </>
    ),
  },
  {
    id: "sources",
    title: "How We Collect Information",
    icon: <Eye size={19} />,
    content: (
      <>
        <p>We may receive information:</p>
        <ul>
          <li>Directly from you when you submit a form, email us, call us, or request a proposal.</li>
          <li>Through services you choose to use to contact us, such as WhatsApp, Instagram, Facebook, LinkedIn, or another messaging or social platform. Those platforms also process information under their own terms and privacy policies.</li>
          <li>Automatically from your browser or device when you visit our website, subject to the technologies enabled and any consent requirements that apply.</li>
          <li>From a colleague or organisation that contacts us on your behalf, or from publicly available business sources where appropriate for a business enquiry.</li>
          <li>From service providers that support our website, communications, project delivery, security, or payment administration.</li>
        </ul>
      </>
    ),
  },
  {
    id: "uses",
    title: "How We Use Information",
    icon: <FileText size={19} />,
    content: (
      <>
        <p>We use information only as reasonably needed for our business and services, including to:</p>
        <ul>
          <li>Respond to questions, qualify enquiries, prepare quotes and proposals, and communicate with you.</li>
          <li>Deliver, test, maintain, secure, and support services or projects you request.</li>
          <li>Manage project schedules, client requirements, feedback, approvals, invoices, and business records.</li>
          <li>Operate and improve our website, understand general website performance, troubleshoot errors, and help prevent fraud, abuse, or security incidents.</li>
          <li>Configure integrations, automation workflows, analytics, or AI-powered features requested as part of a project.</li>
          <li>Send service-related notices and, where permitted, relevant business updates or marketing communications.</li>
          <li>Meet legal obligations, enforce agreements, resolve disputes, and protect our rights or the rights of others.</li>
        </ul>
        <p>
          We do not intend to collect more personal information than is reasonably
          needed for these purposes. If we need to use information for a materially
          different purpose, we will provide additional information or obtain consent
          where required by law.
        </p>
      </>
    ),
  },
  {
    id: "legal-bases",
    title: "Legal Bases for Processing",
    icon: <Scale size={19} />,
    content: (
      <>
        <p>
          Where data protection law such as the GDPR or UK GDPR applies, we process
          personal information only when an appropriate legal basis is available. The
          basis may depend on the context and can include:
        </p>
        <ul>
          <li><strong>Contract or pre-contract steps:</strong> to respond to a request, prepare a proposal, or deliver an agreed service.</li>
          <li><strong>Legitimate interests:</strong> to run and protect our business, manage client relationships, and improve our services, where those interests are not overridden by your rights.</li>
          <li><strong>Consent:</strong> where you have actively agreed to a specific use, such as certain optional cookies or marketing messages where consent is required. You can withdraw consent where applicable.</li>
          <li><strong>Legal obligations:</strong> to maintain records or respond to valid legal requests.</li>
        </ul>
        <p>
          These bases are relevant only where the applicable law requires them. The
          legal basis for a particular activity may be explained further when the
          information is collected.
        </p>
      </>
    ),
  },
  {
    id: "cookies",
    title: "Cookies, Analytics & Similar Technologies",
    icon: <Cookie size={19} />,
    content: (
      <>
        <p>
          Our website may use cookies, local storage, pixels, or similar technologies.
          These tools can help the website function, remember preferences, protect
          against abuse, measure traffic, or support marketing when such tools are
          enabled.
        </p>
        <ul>
          <li><strong>Strictly necessary technologies</strong> may support core features, security, or navigation.</li>
          <li><strong>Analytics technologies</strong>, if enabled, may help us understand aggregate website use and performance.</li>
          <li><strong>Advertising or social media technologies</strong>, if enabled, may help measure campaigns or connect website activity with a platform.</li>
        </ul>
        <p>
          The exact technologies, providers, and retention periods depend on the tools
          installed on the live website. Where required, non-essential cookies or similar
          technologies will be disabled until you provide valid consent, and you should
          be able to change your choice later. Browser settings may also let you remove
          or block cookies, although some site features may not work as intended.
        </p>
        <p>
          <strong>Before publishing:</strong> list the actual analytics, advertising,
          embeds, and cookie providers used by the website, and add a consent banner or
          preference control if required. A privacy policy by itself is not a substitute
          for a consent mechanism.
        </p>
      </>
    ),
  },
  {
    id: "ai",
    title: "AI Tools, Integrations & Automation",
    icon: <Bot size={19} />,
    content: (
      <>
        <p>
          WORTEX may develop or configure AI-assisted features, chatbots, data workflows,
          and business automations for clients. Our team may also use software tools to
          support research, coding, design, testing, or project delivery.
        </p>
        <p>
          Depending on the service, information such as prompts, instructions, files,
          business records, or user-submitted content may be processed by the AI or
          automation provider selected for that workflow. Each provider has its own
          privacy terms, security features, retention settings, and rules about whether
          submitted data may be used to improve its services.
        </p>
        <p>
          We aim to limit the information sent to these providers to what is needed for
          the agreed task and to follow the client’s documented instructions. For client
          projects, the selected provider and data-handling setup should be reviewed as
          part of implementation. Do not submit confidential, regulated, or highly
          sensitive information to a public AI tool unless you are authorised to do so
          and the relevant protections have been assessed.
        </p>
        <p>
          AI-generated outputs can be inaccurate or incomplete and may require human
          review. Unless specifically agreed in writing, an AI feature should not be
          treated as a substitute for professional, legal, medical, financial, or other
          regulated advice, nor should it make consequential decisions about people
          without appropriate safeguards.
        </p>
      </>
    ),
  },
  {
    id: "sharing",
    title: "When We Share Information",
    icon: <UserRound size={19} />,
    content: (
      <>
        <p>We may share information with the following categories of recipients where necessary for the purposes described above:</p>
        <ul>
          <li><strong>Service providers:</strong> hosting and cloud platforms, email and communication tools, form or CRM systems, project-management and file-storage services, analytics providers, payment processors, security vendors, and software development platforms.</li>
          <li><strong>AI and integration providers:</strong> where an AI feature, API, or automated workflow requires a third-party service.</li>
          <li><strong>Project collaborators:</strong> contractors or specialists who need access to deliver your project, subject to appropriate confidentiality and access arrangements.</li>
          <li><strong>Professional or legal advisers:</strong> where reasonably necessary for business, accounting, legal, or dispute-related matters.</li>
          <li><strong>Authorities or other parties:</strong> where disclosure is required by law, valid legal process, or necessary to protect rights, safety, and security.</li>
          <li><strong>Business transfers:</strong> if our business is reorganised, sold, or transferred, subject to applicable legal requirements.</li>
        </ul>
        <p>
          Where a provider acts on our behalf, we aim to limit the information it can
          access and the purposes for which it may use it, using appropriate agreements
          and settings where available. Independent platforms you choose to interact
          with may process information as separate controllers under their own policies.
        </p>
        <p>
          We do not sell personal information for money. Certain advertising or analytics
          practices can be treated as a “sale,” “sharing,” or targeted advertising under
          some privacy laws even when no money changes hands. If we enable a practice
          covered by such a law, we will provide the applicable notice and choices.
        </p>
      </>
    ),
  },
  {
    id: "transfers",
    title: "International Data Transfers",
    icon: <Globe2 size={19} />,
    content: (
      <>
        <p>
          WORTEX works with clients and service providers in different countries. As a
          result, information may be stored or processed in a country other than the one
          where you live, depending on the hosting, communication, cloud, payment, or AI
          services used.
        </p>
        <p>
          Where applicable law restricts international transfers, we will take steps
          required by that law, which may include using an approved transfer mechanism
          or contractual safeguards. The protections available can vary by provider and
          destination.
        </p>
      </>
    ),
  },
  {
    id: "retention",
    title: "How Long We Keep Information",
    icon: <Clock size={19} />,
    content: (
      <>
        <p>
          We keep personal information only for as long as reasonably necessary for the
          purpose for which it was collected, including to respond to enquiries, deliver
          services, maintain business and accounting records, resolve disputes, and meet
          legal obligations.
        </p>
        <p>
          Retention periods vary by information type and context. For example, an enquiry
          that does not become a project may be kept for a limited period for follow-up
          and recordkeeping; contract, invoice, or tax records may need to be retained
          longer; and project files may be retained according to the relevant agreement
          or support requirements. When information is no longer needed, we will delete
          it, anonymise it, or securely dispose of it where reasonably practicable, subject
          to backups and legal retention requirements.
        </p>
      </>
    ),
  },
  {
    id: "security",
    title: "Security & Confidentiality",
    icon: <LockKeyhole size={19} />,
    content: (
      <>
        <p>
          We use reasonable technical, organisational, and access-control measures
          appropriate to the information and the services involved. Depending on the
          project, these may include restricted account access, secure hosting
          configurations, backups, encryption features offered by service providers,
          and confidentiality arrangements.
        </p>
        <p>
          No website, transmission method, or storage system can be guaranteed to be
          completely secure. Please use appropriate channels for confidential material
          and notify us promptly if you believe information sent to WORTEX has been
          compromised.
        </p>
      </>
    ),
  },
  {
    id: "client-data",
    title: "Client Websites, Applications & Project Data",
    icon: <Database size={19} />,
    content: (
      <>
        <p>
          When we build, host, maintain, or integrate a website, application, database,
          analytics system, or automation for a client, that system may collect personal
          information from the client’s own users. The client is generally responsible
          for deciding what information to collect, providing an appropriate privacy
          notice, obtaining required permissions, and responding to its users, unless
          the parties agree otherwise in writing.
        </p>
        <p>
          WORTEX may process that information only as needed to provide the contracted
          service and according to the client’s instructions. The client should ensure
          it has the rights and permissions needed to provide us with the relevant data.
          If a project requires access to personal data at scale, sensitive data, or
          regulated data, the parties should agree on roles, security controls, retention,
          incident handling, and any required data-processing agreement before work begins.
        </p>
        <p>
          If you are an end user of a website or application built for one of our clients,
          please contact that website or application’s operator first for requests about
          your account or personal information. We will help route a request where
          reasonably possible and appropriate.
        </p>
      </>
    ),
  },
  {
    id: "rights",
    title: "Your Rights & Choices",
    icon: <Scale size={19} />,
    content: (
      <>
        <p>
          Your rights depend on where you live and which privacy laws apply. Subject to
          applicable law and relevant exceptions, you may be able to:
        </p>
        <ul>
          <li>Ask whether we hold personal information about you and request a copy.</li>
          <li>Ask us to correct information that is inaccurate or incomplete.</li>
          <li>Request deletion of information or restriction of certain processing.</li>
          <li>Object to certain processing, including direct marketing.</li>
          <li>Receive certain information in a portable format where the right applies.</li>
          <li>Withdraw consent for processing that relies on your consent.</li>
          <li>Opt out of certain sale, sharing, or targeted advertising practices where a relevant law provides that right.</li>
          <li>Complain to a competent data protection or privacy authority where applicable.</li>
        </ul>
        <p>
          {/* To make a request, email <a className="text-[#a600ff] underline underline-offset-4" href="mailto:contact@wortex.studio">contact@wortex.studio</a> with */}
          To make a request, email <a className="text-[#a600ff] underline underline-offset-4" href="mailto:wortexstudio.official@gmail.com">wortexstudio.official@gmail.com</a> with
          the subject “Privacy Request” and explain what you need. We may ask for
          information reasonably necessary to verify your identity and protect against
          unauthorised disclosure. We will respond within the timeframe required by
          applicable law. Some information may need to be retained to meet legal
          obligations, protect security, or establish or defend legal claims.
        </p>
      </>
    ),
  },
  {
    id: "marketing",
    title: "Marketing & Business Communications",
    icon: <Mail size={19} />,
    content: (
      <>
        <p>
          We may send service-related messages about enquiries, proposals, active
          projects, invoices, security, or support. Where permitted by law, we may also
          send relevant business updates or marketing messages.
        </p>
        <p>
          You can ask us to stop marketing communications by using an unsubscribe option
          {/* where provided or by emailing <a className="text-[#a600ff] underline underline-offset-4" href="mailto:contact@wortex.studio">contact@wortex.studio</a>. */}
          where provided or by emailing <a className="text-[#a600ff] underline underline-offset-4" href="mailto:wortexstudio.official@gmail.com">wortexstudio.official@gmail.com</a>.
          Opting out of marketing will not stop essential messages about an active project
          or transaction. We do not treat a request for a quote as blanket permission to
          send every type of marketing message where consent is legally required.
        </p>
      </>
    ),
  },
  {
    id: "third-party",
    title: "Third-Party Websites & Services",
    icon: <Globe2 size={19} />,
    content: (
      <>
        <p>
          Our website may link to third-party websites, portfolios, social platforms,
          scheduling tools, payment pages, or embedded content. These services are not
          controlled by this policy, and their own privacy notices and terms apply to
          your use of them. Review those notices before providing information directly
          to a third party.
        </p>
      </>
    ),
  },
  {
    id: "children",
    title: "Children’s Privacy",
    icon: <UserRound size={19} />,
    content: (
      <>
        <p>
          Our business website and services are intended for businesses and general
          audiences, not specifically for children. We do not knowingly solicit personal
          information directly from children through our general enquiry channels. If
          you believe a child has provided personal information to us, contact us so we
          can review the situation and take appropriate steps.
        </p>
      </>
    ),
  },
  {
    id: "changes",
    title: "Changes to This Policy",
    icon: <FileText size={19} />,
    content: (
      <>
        <p>
          We may update this policy as our services, website, providers, or legal
          obligations change. The “Last updated” date at the top will indicate when the
          current version was revised. If a change materially affects how we handle
          information, we will provide additional notice where required by law.
        </p>
      </>
    ),
  },
  {
    id: "contact",
    title: "Contact WORTEX STUDIO",
    icon: <Mail size={19} />,
    content: (
      <>
        <p>
          For questions about this policy, privacy requests, or concerns about how
          information is handled, contact us using the details below.
        </p>
        <div className="mt-5 rounded-2xl border border-zinc-200 bg-zinc-50 p-5 md:p-6">
          <p className="font-orbitron text-sm font-bold uppercase tracking-wide text-zinc-900">WORTEX STUDIO</p>
          {/* <p className="mt-2 text-sm text-zinc-600">Legal / contracting name: Wortex Studio</p> */}
          {/* <p className="mt-2 text-sm text-zinc-600">Email: <a className="font-semibold text-[#a600ff] underline underline-offset-4" href="mailto:contact@wortex.studio">contact@wortex.studio</a></p> */}
          <p className="mt-2 text-sm text-zinc-600">Email: <a className="font-semibold text-[#a600ff] underline underline-offset-4" href="mailto:wortexstudio.official@gmail.com">wortexstudio.official@gmail.com</a></p>
          {/* <p className="mt-2 text-sm leading-relaxed text-zinc-600">
            Add the full legal contracting name (including the correct business/legal
            form, if applicable) and business mailing address here before publishing.
          </p> */}
        </div>
      </>
    ),
  },
];

export default function PrivacyPolicyPage() {
  return (
    <main className="min-h-screen w-full bg-white pt-28 pb-20 md:pt-32">
      <div className="mx-auto max-w-7xl px-5 md:px-8">
        {/* Page heading */}
        <header className="mb-14 text-center md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
          >
            <span className="mb-4 block font-quantico text-[10px] font-bold uppercase tracking-[0.45em] text-[#a600ff] md:text-xs">
              Legal // Data Protection
            </span>
            <h1 className="font-orbitron text-3xl font-black italic tracking-tighter text-zinc-900 sm:text-5xl md:text-7xl">
              PRIVACY POLICY<span className="text-[#a600ff]">_</span>
            </h1>
            <div className="mx-auto mt-6 h-1 w-20 bg-zinc-900" />
            <p className="mx-auto mt-7 max-w-2xl text-sm leading-7 text-zinc-500 md:text-base">
              Transparency matters. Here is how WORTEX STUDIO handles information when
              you explore our work, contact our team, or work with us.
            </p>
            <div className="mt-7 flex flex-wrap items-center justify-center gap-3">
              <span className="rounded-full border border-zinc-200 bg-zinc-50 px-4 py-2 font-quantico text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                Last Updated // October 26, 2026
              </span>
              <span className="rounded-full border border-zinc-200 bg-white px-4 py-2 font-quantico text-[9px] uppercase tracking-[0.2em] text-zinc-600">
                WORTEX STUDIO
              </span>
            </div>
          </motion.div>
        </header>

        {/* Intro notice */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.15 }}
          transition={{ duration: 0.5 }}
          className="mb-12 rounded-[1.75rem] border border-zinc-100 bg-white p-6 shadow-xl shadow-black/[0.04] md:p-8"
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-start">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-zinc-50 text-[#a600ff]">
              <ShieldCheck size={23} />
            </div>
            <div>
              <h2 className="mb-2 font-orbitron text-sm font-bold uppercase tracking-wide text-zinc-900">
                Your information. Clear boundaries.
              </h2>
              <p className="text-sm leading-7 text-zinc-600">
                We use information to respond to enquiries, deliver agreed work, operate
                our services, and protect our business. The details below explain the
                categories of information involved, the circumstances in which it may be
                shared, and the choices available to you under applicable law.
              </p>
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-8 lg:grid-cols-[250px_minmax(0,1fr)] lg:gap-12">
          {/* Contents navigation */}
          <aside className="lg:sticky lg:top-28 lg:self-start">
            <div className="rounded-[1.5rem] border border-zinc-100 bg-white p-5 shadow-lg shadow-black/[0.03] md:p-6">
              <p className="mb-4 font-quantico text-[10px] font-bold uppercase tracking-[0.3em] text-[#a600ff]">
                On This Page
              </p>
              <nav aria-label="Privacy policy sections" className="max-h-[65vh] space-y-1 overflow-y-auto pr-1">
                {toc.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    className="block rounded-lg px-3 py-2 text-xs leading-5 text-zinc-500 transition-colors hover:bg-zinc-50 hover:text-[#a600ff] focus:outline-none focus:ring-2 focus:ring-[#a600ff]/30"
                  >
                    {item.label}
                  </a>
                ))}
              </nav>
              <div className="mt-5 border-t border-zinc-100 pt-5">
                <p className="font-quantico text-[9px] uppercase tracking-[0.2em] text-zinc-400">
                  Privacy contact
                </p>
                {/* <a href="mailto:contact@wortex.studio" className="mt-2 inline-block text-xs font-semibold text-zinc-800 transition-colors hover:text-[#a600ff]">
                  contact@wortex.studio
                </a> */}
                <a href="mailto:wortexstudio.official@gmail.com" className="mt-2 inline-block text-xs font-semibold text-zinc-800 transition-colors hover:text-[#a600ff]">
                  wortexstudio.official@gmail.com
                </a>
              </div>
            </div>
          </aside>

          {/* Policy sections */}
          <div className="min-w-0">
            {policySections.map((section, index) => (
              <motion.section
                key={section.id}
                id={section.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.08 }}
                transition={{ duration: 0.45, delay: Math.min(index * 0.025, 0.15) }}
                className="scroll-mt-28 border-t border-zinc-200 py-8 first:border-t-0 first:pt-0 md:py-10"
              >
                <div className="mb-5 flex items-start gap-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-zinc-50 text-[#a600ff]">
                    {section.icon}
                  </div>
                  <div className="min-w-0 pt-0.5">
                    <p className="mb-1 font-quantico text-[9px] uppercase tracking-[0.25em] text-zinc-400">
                      Section {String(index + 1).padStart(2, "0")}
                    </p>
                    <h2 className="font-orbitron text-base font-bold leading-snug tracking-tight text-zinc-900 md:text-lg">
                      {section.title}
                    </h2>
                  </div>
                </div>
                <div className="policy-copy space-y-4 pl-0 text-sm leading-7 text-zinc-600 sm:pl-14">
                  {section.content}
                </div>
              </motion.section>
            ))}

            {/* Closing line */}
            <div className="mt-4 border-t border-zinc-300 pt-8">
              <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
                <div className="flex items-center gap-2 font-quantico text-[9px] uppercase tracking-[0.22em] text-zinc-400">
                  <span className="h-2 w-2 animate-pulse rounded-full bg-[#a600ff]" />
                  Privacy // Transparency // Responsibility
                </div>
                {/* <a
                  href="mailto:contact@wortex.studio?subject=Privacy%20Request"
                  className="inline-flex items-center justify-center rounded-full bg-zinc-900 px-5 py-3 font-quantico text-[10px] font-bold uppercase tracking-[0.18em] text-white transition-colors duration-300 hover:bg-[#a600ff]"
                >
                  Contact About Privacy <Mail size={13} className="ml-2" />
                </a> */}
              </div>
            </div>
          </div>
        </div>

        <style jsx global>{`
          html {
            scroll-behavior: smooth;
          }
          .policy-copy p {
            margin: 0;
          }
          .policy-copy ul {
            list-style: none;
            margin: 0.25rem 0 0;
            padding: 0;
          }
          .policy-copy li {
            position: relative;
            margin: 0.65rem 0;
            padding-left: 1.15rem;
          }
          .policy-copy li::before {
            content: "";
            position: absolute;
            top: 0.78rem;
            left: 0;
            width: 0.35rem;
            height: 1px;
            background: #a600ff;
          }
          .policy-copy strong {
            color: #27272a;
            font-weight: 650;
          }
          @media (prefers-reduced-motion: reduce) {
            html {
              scroll-behavior: auto;
            }
          }
        `}</style>
      </div>
    </main>
  );
}
