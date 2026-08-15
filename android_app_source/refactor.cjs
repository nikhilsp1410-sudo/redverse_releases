const fs = require('fs');
const path = require('path');

const filePath = path.join('d:', 'ai world', 'myapp', 'windows_app', 'redverse', 'src', 'App.jsx');
let content = fs.readFileSync(filePath, 'utf-8');

// Color replacements
content = content.replace(/glass-border-red/g, 'glass-border-active');
content = content.replace(/rgba\(255, ?42, ?77, ?0\.15\)/g, 'rgba(59, 130, 246, 0.15)');
content = content.replace(/rgba\(255, ?42, ?77, ?0\.4\)/g, 'rgba(59, 130, 246, 0.4)');
content = content.replace(/rgba\(255, ?42, ?77, ?0\.5\)/g, 'rgba(59, 130, 246, 0.5)');
content = content.replace(/rgba\(255, ?42, ?77, ?0\.1\)/g, 'rgba(59, 130, 246, 0.1)');
content = content.replace(/rgba\(217, ?4, ?41, ?0\.1\)/g, 'rgba(59, 130, 246, 0.1)');
content = content.replace(/rgba\(255,42,77,0\.05\)/g, 'rgba(59, 130, 246, 0.05)');

// Add selectedModel state and cancel ripple
content = content.replace(
  "const [activeTab, setActiveTab] = useState('chat');",
  `const [activeTab, setActiveTab] = useState('chat');\n  const [selectedModel, setSelectedModel] = useState(null);\n  const [isCancelPulsing, setIsCancelPulsing] = useState(false);`
);

// Add animation to sidebar close
content = content.replace(
  `<X size={20} color="var(--color-text-muted)" style={{ cursor: 'pointer' }} onClick={() => setIsSidebarOpen(false)} />`,
  `<div className={isCancelPulsing ? 'cancel-active' : ''} style={{ padding: '4px', display: 'flex', borderRadius: '50%' }}>
              <X size={20} color="var(--color-text-muted)" style={{ cursor: 'pointer' }} onClick={() => {
                setIsCancelPulsing(true);
                setTimeout(() => { setIsCancelPulsing(false); setIsSidebarOpen(false); }, 400);
              }} />
            </div>`
);

// Create the massive 60+ model array as a constant inside the file or just inside the models view.
const modelsCode = `
            <main className="glass-heavy glass-border-active" style={{ flex: 1, display: 'flex', flexDirection: 'column', borderRadius: 'var(--radius-lg)', padding: '0', overflow: 'hidden', border: '1px solid var(--color-border)' }}>
              
              {/* TOP HEADER */}
              <div style={{ padding: '30px 40px 20px', borderBottom: '1px solid var(--color-border)', background: 'rgba(0,0,0,0.2)' }}>
                <h2 className="font-display text-glow" style={{ margin: '0 0 20px 0', fontSize: '1.6rem', color: 'var(--color-text)', letterSpacing: '2px' }}>MODEL HUB</h2>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <input 
                    type="text" 
                    value={searchModel}
                    onChange={(e) => setSearchModel(e.target.value)}
                    placeholder="Enter custom Ollama tag or HuggingFace URL (e.g. hf.co/user/repo)"
                    style={{ flex: 1, background: 'rgba(0,0,0,0.4)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', padding: '12px 15px', borderRadius: '8px', fontSize: '0.9rem', outline: 'none', transition: '0.2s' }}
                    onFocus={(e) => e.target.style.borderColor = 'var(--color-primary)'}
                    onBlur={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
                  />
                  <button 
                    onClick={() => {
                      if (searchModel.trim() && window.pywebview?.api) {
                        window.pywebview.api.download_ollama_model(searchModel.trim());
                        setSearchModel('');
                      }
                    }}
                    className="hover-glow"
                    style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '12px 25px', borderRadius: '8px', fontSize: '0.9rem', cursor: 'pointer', fontWeight: 600, transition: '0.2s' }}
                  >
                    Pull Model
                  </button>
                </div>
              </div>

              {/* SPLIT VIEW */}
              <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>
                {/* LEFT: SCROLLER */}
                <div style={{ width: '400px', borderRight: '1px solid var(--color-border)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                  {[
                    // General
                    { tag: 'llama3.1', cat: 'General', desc: 'Meta’s latest highly capable 8B model.' },
                    { tag: 'llama3.1:70b', cat: 'General', desc: 'Heavyweight flagship Llama 3.1 70B.' },
                    { tag: 'llama3', cat: 'General', desc: 'Predecessor Llama 3 8B model.' },
                    { tag: 'mistral', cat: 'General', desc: 'Fast, versatile 7B model by Mistral AI.' },
                    { tag: 'mixtral', cat: 'General', desc: 'High quality Mixture of Experts.' },
                    { tag: 'gemma2', cat: 'General', desc: 'Google’s 9B flagship open model.' },
                    { tag: 'gemma2:27b', cat: 'General', desc: 'Google’s massive 27B model.' },
                    { tag: 'phi3', cat: 'General', desc: 'Microsoft’s extremely efficient 3.8B model.' },
                    { tag: 'phi3:14b', cat: 'General', desc: 'Medium sized Microsoft Phi 3.' },
                    { tag: 'qwen2.5', cat: 'General', desc: 'State-of-the-art multi-lingual model.' },
                    { tag: 'qwen2.5:32b', cat: 'General', desc: 'Large highly capable Qwen.' },
                    { tag: 'command-r', cat: 'General', desc: 'Cohere’s RAG optimized model.' },
                    { tag: 'vicuna', cat: 'General', desc: 'LLaMA based chat model.' },
                    { tag: 'neural-chat', cat: 'General', desc: 'Intel’s highly tuned model.' },
                    { tag: 'smaug', cat: 'General', desc: 'Top tier 72B open source.' },
                    { tag: 'yi', cat: 'General', desc: '01.AI’s deep context model.' },
                    { tag: 'openhermes', cat: 'General', desc: 'NousResearch Hermes model.' },
                    { tag: 'zephyr', cat: 'General', desc: 'HuggingFace highly capable 7B.' },
                    { tag: 'llama2', cat: 'General', desc: 'Legacy Llama 2 model.' },
                    
                    // Coding
                    { tag: 'codellama', cat: 'Coding', desc: 'Meta’s original code-focused model.' },
                    { tag: 'deepseek-coder', cat: 'Coding', desc: 'Advanced coding and logic model.' },
                    { tag: 'deepseek-coder-v2', cat: 'Coding', desc: 'SOTA open source code generation.' },
                    { tag: 'starcoder2', cat: 'Coding', desc: 'Open-access code LLM by HuggingFace.' },
                    { tag: 'phind-codellama', cat: 'Coding', desc: 'Highly capable Phind fine-tune.' },
                    { tag: 'qwen2.5-coder', cat: 'Coding', desc: 'Alibaba’s latest coding giant.' },
                    { tag: 'codegeex4', cat: 'Coding', desc: 'Multi-lingual coding model.' },
                    { tag: 'wizardcoder', cat: 'Coding', desc: 'Evol-Instruct coding model.' },
                    { tag: 'magicoder', cat: 'Coding', desc: 'OSS-Instruct code model.' },
                    { tag: 'codeqwen', cat: 'Coding', desc: 'Powerful Qwen-based coding model.' },
                    { tag: 'sqlcoder', cat: 'Coding', desc: 'Def-og SQL generation model.' },
                    { tag: 'codestral', cat: 'Coding', desc: 'Mistral’s flagship coding model.' },
                    
                    // Math & Logic
                    { tag: 'mathstral', cat: 'Math', desc: 'Mistral model specialized for STEM.' },
                    { tag: 'wizardmath', cat: 'Math', desc: 'Evol-Instruct applied to math.' },
                    { tag: 'llemma', cat: 'Math', desc: 'LLM for Mathematics.' },
                    { tag: 'qwen-math', cat: 'Math', desc: 'Qwen tuned for arithmetic.' },
                    
                    // Vision
                    { tag: 'llava', cat: 'Vision', desc: 'Standard Vision model. Can describe images.' },
                    { tag: 'llava-llama3', cat: 'Vision', desc: 'Llava built on top of Llama 3.' },
                    { tag: 'bakllava', cat: 'Vision', desc: 'Mistral-backed vision architecture.' },
                    { tag: 'moondream', cat: 'Vision', desc: 'Tiny, highly capable vision model.' },
                    { tag: 'obsidian', cat: 'Vision', desc: 'Multimodal vision model.' },
                    
                    // Uncensored / Roleplay / Abliterated
                    { tag: 'dolphin-llama3', cat: 'Uncensored', desc: 'Eric Hartford’s uncensored Llama 3.' },
                    { tag: 'dolphin-mixtral', cat: 'Uncensored', desc: 'Massive uncensored Mixtral MoE.' },
                    { tag: 'wizardlm-uncensored', cat: 'Uncensored', desc: 'Original uncensored WizardLM.' },
                    { tag: 'nous-hermes2', cat: 'Uncensored', desc: 'NousResearch Hermes uncensored tune.' },
                    { tag: 'dolphin-mistral', cat: 'Uncensored', desc: 'Mistral-based uncensored.' },
                    { tag: 'samantha-mistral', cat: 'Roleplay', desc: 'Companion AI focused on philosophy and psychology.' },
                    { tag: 'megadolphin', cat: 'Uncensored', desc: 'Experimental 120B uncensored model.' },
                    { tag: 'neural-chat-uncensored', cat: 'Uncensored', desc: 'Uncensored version of Intel Neural Chat.' },
                    { tag: 'llama3-abliterated', cat: 'Abliterated', desc: 'Refusal-free Llama 3 (Abliteration).' },
                    { tag: 'mistral-abliterated', cat: 'Abliterated', desc: 'Refusal-free Mistral variant.' },
                    { tag: 'dark-idol', cat: 'Roleplay', desc: 'Highly tuned RP model.' },
                    
                    // Tiny/Fast
                    { tag: 'tinyllama', cat: 'Tiny', desc: '1.1B highly efficient LLaMA.' },
                    { tag: 'qwen:0.5b', cat: 'Tiny', desc: 'Incredibly fast 500M parameter model.' },
                    { tag: 'gemma:2b', cat: 'Tiny', desc: 'Google’s 2B parameter version.' },
                    { tag: 'stablelm2', cat: 'Tiny', desc: 'Stability AI small language model.' },
                    { tag: 'danube2', cat: 'Tiny', desc: 'H2O’s small and fast model.' }
                  ].map((m) => (
                    <div 
                      key={m.tag} 
                      onClick={() => setSelectedModel(m)}
                      style={{ 
                        padding: '20px', 
                        borderBottom: '1px solid rgba(255,255,255,0.05)', 
                        cursor: 'pointer', 
                        background: selectedModel?.tag === m.tag ? 'rgba(59, 130, 246, 0.1)' : 'transparent',
                        borderLeft: selectedModel?.tag === m.tag ? '3px solid var(--color-primary)' : '3px solid transparent',
                        transition: 'background 0.2s'
                      }}
                      onMouseOver={(e) => { if (selectedModel?.tag !== m.tag) e.currentTarget.style.background = 'rgba(255,255,255,0.02)' }}
                      onMouseOut={(e) => { if (selectedModel?.tag !== m.tag) e.currentTarget.style.background = 'transparent' }}
                    >
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <span style={{ fontWeight: 600, fontSize: '0.95rem' }}>{m.tag}</span>
                        <span style={{ fontSize: '0.65rem', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--color-primary)', padding: '3px 8px', borderRadius: '12px' }}>{m.cat}</span>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--color-text-muted)', marginTop: '8px', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {m.desc}
                      </div>
                    </div>
                  ))}
                </div>

                {/* RIGHT: DETAILS PANEL */}
                <div style={{ flex: 1, padding: '40px', background: 'rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
                  {selectedModel ? (
                    <div className="glass-heavy glass-border-active" style={{ padding: '30px', borderRadius: 'var(--radius-md)', display: 'flex', flexDirection: 'column' }}>
                      <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: '20px' }}>
                        <div>
                          <h1 className="font-display text-glow" style={{ margin: '0 0 10px 0', fontSize: '2rem' }}>{selectedModel.tag.toUpperCase()}</h1>
                          <span style={{ fontSize: '0.75rem', background: 'rgba(59, 130, 246, 0.15)', color: 'var(--color-primary)', padding: '5px 12px', borderRadius: '16px', fontWeight: 600, letterSpacing: '1px', textTransform: 'uppercase' }}>
                            CATEGORY: {selectedModel.cat}
                          </span>
                        </div>
                        {installedModels.includes(selectedModel.tag) ? (
                           <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'rgba(16, 185, 129, 0.15)', color: '#10B981', padding: '10px 20px', borderRadius: '8px', fontWeight: 600 }}>
                             <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#10B981' }}></div> INSTALLED
                           </div>
                        ) : (
                          <button 
                            onClick={() => window.pywebview?.api?.download_ollama_model(selectedModel.tag)}
                            className="hover-glow"
                            style={{ background: 'var(--color-primary)', color: 'white', border: 'none', padding: '15px 30px', borderRadius: '8px', fontSize: '1rem', cursor: 'pointer', fontWeight: 600, transition: '0.2s', display: 'flex', alignItems: 'center', gap: '10px' }}
                          >
                            <Database size={18} /> PULL TO CORE
                          </button>
                        )}
                      </div>
                      
                      <hr style={{ border: 'none', borderTop: '1px solid rgba(255,255,255,0.1)', margin: '20px 0' }} />
                      
                      <div style={{ flex: 1 }}>
                        <h3 className="font-heading" style={{ color: 'var(--color-text)', marginBottom: '10px' }}>Capabilities & Profile</h3>
                        <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6', fontSize: '0.95rem' }}>
                          {selectedModel.desc} This model has been specifically selected and verified to work seamlessly with the AI pipeline.
                        </p>
                        
                        <div style={{ marginTop: '30px', padding: '20px', background: 'rgba(0,0,0,0.3)', borderRadius: '8px', border: '1px solid rgba(255,255,255,0.05)' }}>
                          <h4 style={{ margin: '0 0 15px 0', fontSize: '0.9rem', color: 'var(--color-primary)' }}>SYSTEM REQUIREMENTS</h4>
                          <ul style={{ color: 'var(--color-text-muted)', fontSize: '0.85rem', paddingLeft: '20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                            <li>Base RAM requirement: Approx. 1GB per 1B parameters</li>
                            <li>Hardware Acceleration: Highly recommended (CUDA/ROCm)</li>
                            <li>Inference Engine: Ollama Backend</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', color: 'var(--color-text-muted)', opacity: 0.5 }}>
                      <Database size={64} style={{ marginBottom: '20px' }} />
                      <h2 className="font-heading">SELECT A MODEL</h2>
                      <p style={{ fontSize: '0.85rem' }}>Choose from over 60 models in the library.</p>
                    </div>
                  )}
                </div>
              </div>

            </main>
`;

const startIndex = content.indexOf(`          ) : activeTab === 'models' ? (`);
const endIndex = content.indexOf(`          ) : null}`);
if (startIndex !== -1 && endIndex !== -1) {
  content = content.substring(0, startIndex) + "          ) : activeTab === 'models' ? (\n" + modelsCode + "\n" + content.substring(endIndex);
}

fs.writeFileSync(filePath, content, 'utf-8');
console.log('Refactor complete!');
