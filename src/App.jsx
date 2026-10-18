import { useState } from 'react';
import {
  ArrowDownRight,
  ArrowRight,
  Brain,
  Check,
  CircleDot,
  Clock3,
  HeartPulse,
  ScanLine,
  ShieldAlert,
  Stethoscope,
} from 'lucide-react';
import './style.css';

const scanAreas = {
  brain: {
    label: 'Brain',
    icon: Brain,
    title: 'A fast look inside the head',
    description:
      'In urgent situations, CT can help clinicians look for bleeding, skull injury, or signs of a major stroke. It is often chosen when speed matters and the question is time-sensitive.',
    question: 'Is there bleeding or a serious injury?',
    color: 'mint',
  },
  chest: {
    label: 'Chest',
    icon: HeartPulse,
    title: 'More detail across the chest',
    description:
      'CT can show the lungs, airways, blood vessels, and bones in one exam. Depending on the symptoms and protocol, it may help investigate infection, injury, a clot, or a lung nodule.',
    question: 'What is affecting breathing or circulation?',
    color: 'coral',
  },
  abdomen: {
    label: 'Abdomen',
    icon: ScanLine,
    title: 'A broad view of the abdomen',
    description:
      'When examination or other tests leave questions, CT can help assess organs and internal injury. Contrast may be used when it helps distinguish blood vessels and soft tissues.',
    question: 'Where is the pain or internal injury coming from?',
    color: 'blue',
  },
};

const steps = [
  {
    number: '01',
    title: 'Get positioned',
    description:
      'The patient lies on a table that moves through the scanner’s open ring. A technologist helps them stay still and gives breathing instructions when needed.',
  },
  {
    number: '02',
    title: 'Capture from many angles',
    description:
      'An X-ray source and detectors rotate around the body. The scanner measures how much energy passes through from different directions.',
  },
  {
    number: '03',
    title: 'Reconstruct the slices',
    description:
      'A computer combines those measurements into cross-sectional images. Radiologists interpret the images in context and share findings with the care team.',
  },
];

const uses = [
  {
    icon: Clock3,
    number: '01',
    title: 'Time-sensitive decisions',
    text: 'In emergencies, CT can quickly answer focused questions about trauma, bleeding, or other urgent conditions.',
  },
  {
    icon: ScanLine,
    number: '02',
    title: 'A detailed cross-section',
    text: 'Slices reduce the overlap found in a standard X-ray and can reveal detail across bones, organs, and blood vessels.',
  },
  {
    icon: Stethoscope,
    number: '03',
    title: 'Planning and guidance',
    text: 'CT images can help plan treatment and guide some procedures, such as placing a biopsy needle precisely.',
  },
];

function App() {
  const [activeArea, setActiveArea] = useState('brain');
  const area = scanAreas[activeArea];
  const ActiveIcon = area.icon;

  return (
    <>
      <header className="site-header">
        <a className="wordmark" href="#top" aria-label="CT in medicine, home">
          <span className="wordmark-icon" aria-hidden="true">
            <CircleDot size={19} strokeWidth={1.8} />
          </span>
          <span>CT / IN PRACTICE</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#how-it-works">How it works</a>
          <a href="#clinical-use">Clinical use</a>
          <a href="#trade-offs">Trade-offs</a>
        </nav>
        <a className="header-link" href="#scan-explorer">
          Explore CT <ArrowDownRight size={16} aria-hidden="true" />
        </a>
      </header>

      <main id="top">
        <section className="hero section-wrap" aria-labelledby="hero-title">
          <div className="hero-copy">
            <div className="eyebrow"><span /> A FIELD GUIDE TO MEDICAL IMAGING</div>
            <h1 id="hero-title">A clearer view.<br /><em>Better questions.</em></h1>
            <p className="hero-intro">
              Computed tomography, or CT, turns X-ray measurements into detailed
              cross-sections. Those images can help care teams make the next
              decision with more information.
            </p>
            <div className="hero-actions">
              <a className="button button-dark" href="#how-it-works">
                See how CT works <ArrowRight size={17} aria-hidden="true" />
              </a>
              <span className="reading-time"><Clock3 size={15} /> 4 MIN READ</span>
            </div>
            <div className="hero-note">
              <span className="note-mark">+</span>
              <span>Useful when the right detail can change what happens next.</span>
            </div>
          </div>

          <div className="hero-visual">
            <img
              className="scanner-photo"
              src={`${import.meta.env.BASE_URL}ct-scanner.jpg`}
              alt="A mobile 64-slice CT imaging unit outside a hospital"
              fetchPriority="high"
            />
            <div className="image-label image-label-top">
              <span className="label-dot" /> COMPUTED TOMOGRAPHY
            </div>
            <div className="image-caption">
              <span className="caption-index">01 / 03</span>
              <span>Mobile CT can bring imaging closer to care.</span>
            </div>
            <a
              className="image-credit"
              href="https://commons.wikimedia.org/wiki/File:64-slice_CT_scanner_at_the_Warwickshire_Nuffield_Hospital,_Blackdown_-_geograph.org.uk_-_1540404.jpg"
              target="_blank"
              rel="noreferrer"
            >
              Photo: Robin Stott / CC BY-SA 2.0
            </a>
            <div className="scan-stamp" aria-hidden="true">
              <ScanLine size={20} strokeWidth={1.5} />
              <span>360°</span>
              <small>AROUND THE PATIENT</small>
            </div>
          </div>
        </section>

        <section className="principles" aria-label="What makes CT useful">
          <div className="principles-inner">
            <p className="principles-label">WHY CT</p>
            <div className="principle-item">
              <span className="principle-number">01</span>
              <span>Cross-sectional<br />detail</span>
            </div>
            <div className="principle-item">
              <span className="principle-number">02</span>
              <span>Fast, focused<br />answers</span>
            </div>
            <div className="principle-item">
              <span className="principle-number">03</span>
              <span>Actionable<br />images</span>
            </div>
            <p className="principles-tail">A tool for the<br />right clinical question.</p>
          </div>
        </section>

        <section className="explorer section-wrap" id="scan-explorer" aria-labelledby="explorer-title">
          <div className="section-heading">
            <div>
              <p className="eyebrow"><span /> DIFFERENT QUESTIONS, DIFFERENT SCANS</p>
              <h2 id="explorer-title">Where can CT help?</h2>
            </div>
            <p className="section-aside">
              The scan is selected to answer a clinical question, not just to
              make a picture.
            </p>
          </div>

          <div className="area-tabs" role="group" aria-label="Explore CT by body area">
            {Object.entries(scanAreas).map(([key, item]) => {
              const Icon = item.icon;
              return (
                <button
                  className={`area-tab ${activeArea === key ? 'is-active' : ''}`}
                  id={`tab-${key}`}
                  key={key}
                  type="button"
                  aria-pressed={activeArea === key}
                  onClick={() => setActiveArea(key)}
                >
                  <Icon size={18} strokeWidth={1.8} aria-hidden="true" />
                  {item.label}
                  {activeArea === key && <ArrowDownRight size={15} aria-hidden="true" />}
                </button>
              );
            })}
          </div>

          <div
            className={`area-panel area-panel-${area.color}`}
            id="area-panel"
            aria-live="polite"
            key={activeArea}
          >
            <div className="panel-index">CLINICAL QUESTION / {String(Object.keys(scanAreas).indexOf(activeArea) + 1).padStart(2, '0')}</div>
            <div className="panel-main">
              <div className="panel-symbol"><ActiveIcon size={27} strokeWidth={1.5} /></div>
              <div>
                <h3>{area.title}</h3>
                <p>{area.description}</p>
              </div>
            </div>
            <div className="question-block">
              <span>EXAMPLE QUESTION</span>
              <strong>{area.question}</strong>
              <ArrowRight size={18} aria-hidden="true" />
            </div>
          </div>
          <p className="section-footnote">
            Examples only. The appropriate imaging test depends on the patient,
            symptoms, and clinical judgment.
          </p>
        </section>

        <section className="process-section" id="how-it-works" aria-labelledby="process-title">
          <div className="section-wrap">
            <div className="section-heading process-heading">
              <div>
                <p className="eyebrow eyebrow-light"><span /> FROM X-RAYS TO A 3D PICTURE</p>
                <h2 id="process-title">How a CT scan<br /><em>comes together.</em></h2>
              </div>
              <p className="section-aside section-aside-light">
                Unlike a single X-ray image, CT collects measurements from
                around the body and reconstructs them as slices.
              </p>
            </div>

            <div className="process-grid">
              {steps.map((step) => (
                <article className="process-step" key={step.number}>
                  <span className="step-number">{step.number}</span>
                  <div className="step-rule" />
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="clinical-section section-wrap" id="clinical-use" aria-labelledby="clinical-title">
          <div className="clinical-intro">
            <p className="eyebrow"><span /> THE VALUE IS IN THE ANSWER</p>
            <h2 id="clinical-title">More than a picture.<br /><em>A next step.</em></h2>
            <p>
              CT is useful when its detail can clarify a diagnosis, guide a
              procedure, or help a team decide what care is needed.
            </p>
            <a className="text-link" href="#trade-offs">
              Understand the balance <ArrowRight size={16} aria-hidden="true" />
            </a>
          </div>
          <div className="use-list">
            {uses.map((item) => {
              const Icon = item.icon;
              return (
                <article className="use-row" key={item.number}>
                  <span className="use-number">{item.number}</span>
                  <div className="use-icon"><Icon size={20} strokeWidth={1.7} /></div>
                  <div className="use-copy">
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                  </div>
                  <Check className="use-check" size={18} aria-hidden="true" />
                </article>
              );
            })}
          </div>
        </section>

        <section className="balance-section" id="trade-offs" aria-labelledby="balance-title">
          <div className="balance-inner section-wrap">
            <div className="balance-title">
              <p className="eyebrow"><span /> GOOD CARE WEIGHS BOTH SIDES</p>
              <h2 id="balance-title">Useful does not mean<br /><em>risk-free.</em></h2>
            </div>
            <div className="balance-copy">
              <p>
                CT uses ionizing radiation. For many clinical questions, the
                expected benefit of a needed scan outweighs its small potential
                risk, but the decision should be considered carefully, especially
                for children and repeat imaging.
              </p>
              <p>
                Some exams use contrast material to make structures easier to
                distinguish. It is not needed for every scan and may not be right
                for everyone. Patients can discuss allergies, kidney conditions,
                pregnancy, and other concerns with their care team.
              </p>
              <div className="balance-callout">
                <ShieldAlert size={20} strokeWidth={1.7} aria-hidden="true" />
                <p><strong>The right scan is the one that helps.</strong> Clinicians choose imaging based on the question, alternatives, and individual circumstances.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="sources-section section-wrap" aria-labelledby="sources-title">
          <div className="source-icon"><CircleDot size={21} /></div>
          <div>
            <p className="eyebrow"><span /> KEEP LEARNING</p>
            <h2 id="sources-title">Good questions belong<br />in every scan room.</h2>
          </div>
          <div className="source-links">
            <a href="https://www.radiologyinfo.org/en/info/bodyct" target="_blank" rel="noreferrer">
              RadiologyInfo.org <ArrowRight size={15} />
            </a>
            <a href="https://www.nibib.nih.gov/science-education/science-topics/computed-tomography-ct" target="_blank" rel="noreferrer">
              NIH: Computed tomography <ArrowRight size={15} />
            </a>
            <p>Patient-friendly background from radiology and research organizations.</p>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark footer-wordmark" href="#top">
          <span className="wordmark-icon" aria-hidden="true"><CircleDot size={18} /></span>
          <span>CT / IN PRACTICE</span>
        </a>
        <p>Educational information only. Not a substitute for medical advice.</p>
        <a className="back-top" href="#top">BACK TO TOP <ArrowRight size={14} /></a>
      </footer>
    </>
  );
}

export default App;