import React from 'react';

export default function Technologies() {
  const techGrid = [
    { icon: 'fa-brands fa-python', name: 'Python' },
    { icon: 'fa-solid fa-code', name: 'C / C++' },
    { icon: 'fa-brands fa-java', name: 'Java' },
    { icon: 'fa-brands fa-react', name: 'React' },
    { icon: 'fa-brands fa-node-js', name: 'Node.js' },
    { icon: 'fa-solid fa-n', name: 'Next.js' },
    { icon: 'fa-brands fa-docker', name: 'Docker' },
    { icon: 'fa-brands fa-aws', name: 'AWS' },
    { icon: 'fa-solid fa-leaf', name: 'MongoDB' },
    { icon: 'fa-solid fa-brain', name: 'TensorFlow' },
    { icon: 'fa-solid fa-fire', name: 'PyTorch' },
    { icon: 'fa-solid fa-eye', name: 'OpenCV' },
    { icon: 'fa-solid fa-microchip', name: 'STM32' },
    { icon: 'fa-solid fa-microchip', name: 'ESP32' },
    { icon: 'fa-brands fa-linux', name: 'Linux' },
    { icon: 'fa-brands fa-git-alt', name: 'Git' }
  ];

  return (
    <>
      {/* PAGE HEADER */}
      <div className="page-header">
        <div className="container">
          <span className="section-subtitle">THE STACK</span>
          <h1>TECHNOLOGY ECOSYSTEM</h1>
          <p>
            An integrated engineering architecture optimized for compute-efficient edge systems, 
            signal precision, and reliable web platforms.
          </p>
        </div>
      </div>

      {/* CORE GRID */}
      <section className="technologies-section section-padding">
        <div className="container">
          <div className="tech-grid">
            {techGrid.map((tech, idx) => (
              <div key={idx} className="tech-card">
                <i className={tech.icon}></i>
                <span>{tech.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* DETAILED CATEGORIES */}
      <section className="section-padding" style={{ background: 'rgba(255, 255, 255, 0.01)', borderTop: '1px solid var(--border)' }}>
        <div className="container">
          <div className="section-header">
            <span className="section-subtitle">SPECIFICATIONS</span>
            <h2 className="section-title">Technical Competence & Toolchains</h2>
          </div>
          
          <div className="info-grid">
            <div className="info-card">
              <h3><i className="fas fa-terminal"></i> Languages</h3>
              <p>
                <strong>C / C++</strong>: Embedded systems firmware, real-time control, and RTOS threads.<br />
                <strong>Python</strong>: Machine learning model prototyping, DSP data modeling, and tooling scripting.<br />
                <strong>Rust</strong>: Safe microkernel programming and high-performance server utilities.<br />
                <strong>JavaScript / TypeScript</strong>: Responsive web dashboards and cloud integrations.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-layer-group"></i> Frameworks & SDKs</h3>
              <p>
                <strong>ESP-IDF / STM32Cube</strong>: Low-level SDKs for peripheral control registers.<br />
                <strong>Vite / React / Next.js</strong>: Fast frontend frameworks supporting premium web applications.<br />
                <strong>Fastify / Node.js</strong>: Low-latency REST and WebSocket backend services.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-server"></i> Embedded Platforms</h3>
              <p>
                <strong>ARM Cortex-M4/M7/A72</strong>: Main controllers for general processing.<br />
                <strong>ESP32 (Tensilica)</strong>: Wireless mesh nodes (Wi-Fi, Bluetooth, ESP-NOW).<br />
                <strong>NVIDIA Jetson Nano / Raspberry Pi</strong>: Edge gateways and multi-channel camera pipelines.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-brain"></i> Edge AI Stack</h3>
              <p>
                <strong>TensorFlow Lite / ONNX Runtime</strong>: Model compilation and cross-platform edge execution.<br />
                <strong>PyTorch / OpenCV</strong>: Computational computer vision training and camera transforms.<br />
                <strong>Edge Impulse</strong>: Data gathering and feature scaling for biosignal classification.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-tools"></i> Development & HW Workflow</h3>
              <p>
                <strong>Debug</strong>: JTAG / SWD probes, logic analyzers, and digital oscilloscopes.<br />
                <strong>ECAD</strong>: Altium Designer and KiCAD for multilayer PCB design & routing.<br />
                <strong>Infra</strong>: Docker containers, GitHub actions CI/CD, and Git version control.
              </p>
            </div>
            
            <div className="info-card">
              <h3><i className="fas fa-lock"></i> Protocol & Security</h3>
              <p>
                <strong>Protocols</strong>: MQTT, Modbus, CAN-bus, WebSocket, I2C, SPI, UART.<br />
                <strong>Security</strong>: TLS/SSL sockets, OTA firmware signed encryption, and OAuth authentication.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
