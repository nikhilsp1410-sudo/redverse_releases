const fs = require('fs');
let app = fs.readFileSync('d:/ai world/myapp/windows_app/redverse/src/App.jsx', 'utf8');

// 2. Add Model List
const modelList = `
const AVAILABLE_MODELS = [
  { tag: 'llama3.1', cat: 'General', desc: 'Meta’s latest highly capable 8B model.', size: '4.7 GB' },
  { tag: 'llama3.1:70b', cat: 'General', desc: 'Heavyweight flagship Llama 3.1 70B.', size: '40 GB' },
  { tag: 'llama3', cat: 'General', desc: 'Predecessor Llama 3 8B model.', size: '4.7 GB' },
  { tag: 'mistral', cat: 'General', desc: 'Fast, versatile 7B model by Mistral AI.', size: '4.7 GB' },
  { tag: 'mixtral', cat: 'General', desc: 'High quality Mixture of Experts.', size: '4.7 GB' },
  { tag: 'gemma2', cat: 'General', desc: 'Google’s 9B flagship open model.', size: '4.7 GB' },
  { tag: 'phi3', cat: 'General', desc: 'Microsoft’s extremely efficient 3.8B model.', size: '4.7 GB' },
  { tag: 'qwen2.5', cat: 'General', desc: 'State-of-the-art multi-lingual model.', size: '4.7 GB' },
  { tag: 'command-r', cat: 'General', desc: 'Cohere’s RAG optimized model.', size: '4.7 GB' },
  { tag: 'vicuna', cat: 'General', desc: 'LLaMA based chat model.', size: '4.7 GB' },
  { tag: 'zephyr', cat: 'General', desc: 'HuggingFace highly capable 7B.', size: '4.7 GB' },
  { tag: 'codellama', cat: 'Coding', desc: 'Meta’s original code-focused model.', size: '4.7 GB' },
  { tag: 'deepseek-coder-v2', cat: 'Coding', desc: 'SOTA open source code generation.', size: '4.7 GB' },
  { tag: 'starcoder2', cat: 'Coding', desc: 'Open-access code LLM by HuggingFace.', size: '4.7 GB' },
  { tag: 'qwen2.5-coder', cat: 'Coding', desc: 'Alibaba’s latest coding giant.', size: '4.7 GB' },
  { tag: 'codestral', cat: 'Coding', desc: 'Mistral’s flagship coding model.', size: '4.7 GB' },
  { tag: 'mathstral', cat: 'Math', desc: 'Mistral model specialized for STEM.', size: '4.7 GB' },
  { tag: 'llava', cat: 'Vision', desc: 'Standard Vision model. Can describe images.', size: '4.7 GB' },
  { tag: 'moondream', cat: 'Vision', desc: 'Tiny, highly capable vision model.', size: '4.7 GB' },
  { tag: 'dolphin-llama3', cat: 'Uncensored', desc: 'Eric Hartford’s uncensored Llama 3.', size: '4.7 GB' },
  { tag: 'samantha-mistral', cat: 'Roleplay', desc: 'Companion AI focused on philosophy and psychology.', size: '4.7 GB' },
  { tag: 'tinyllama', cat: 'Tiny', desc: '1.1B highly efficient LLaMA.', size: '4.7 GB' },
  { tag: 'qwen:0.5b', cat: 'Tiny', desc: 'Incredibly fast 500M parameter model.', size: '400 MB' },
  { tag: 'gemma:2b', cat: 'Tiny', desc: 'Google’s 2B parameter version.', size: '1.2 GB' }
];
`;

if (!app.includes('AVAILABLE_MODELS')) {
  app = app.replace('export default function App() {', modelList + '\nexport default function App() {');
}

// 3. Replace Models Tab
const newModelsTab = `              {modelHubTab === 'local' ? (
                <div>
                  <h3 style={{ margin: '0 0 15px 0', fontSize: '1.1rem' }}>Available Models</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '15px', marginBottom: '30px' }}>
                    {AVAILABLE_MODELS.map(m => {
                      const isInstalled = installedModels.includes(m.tag);
                      const isDownloading = activeDownloads[m.tag];
                      return (
                        <div key={m.tag} className="setting-card" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                            <div className="setting-card-icon" style={{ background: isInstalled ? 'rgba(16, 185, 129, 0.1)' : 'var(--surface)', color: isInstalled ? '#10B981' : 'var(--primary)' }}><Database size={20} /></div>
                            <span style={{ fontSize: '0.7rem', background: 'var(--surface)', padding: '4px 8px', borderRadius: '4px', color: 'var(--text-muted)' }}>{m.cat}</span>
                          </div>
                          <div className="setting-card-content">
                            <h4>{m.tag}</h4>
                            <p>{m.desc}</p>
                            <p style={{ marginTop: '5px', fontSize: '0.75rem' }}>Size: {m.size}</p>
                          </div>
                          <div style={{ marginTop: 'auto' }}>
                            {isInstalled ? (
                              <button style={{ width: '100%', padding: '8px', background: 'rgba(16, 185, 129, 0.1)', color: '#10B981', border: '1px solid rgba(16, 185, 129, 0.3)', borderRadius: '4px', fontWeight: 'bold' }} disabled>Installed</button>
                            ) : isDownloading ? (
                              <button style={{ width: '100%', padding: '8px', background: 'rgba(59, 130, 246, 0.1)', color: 'var(--primary)', border: '1px solid rgba(59, 130, 246, 0.3)', borderRadius: '4px', fontWeight: 'bold' }} disabled>Downloading {Math.round(activeDownloads[m.tag].progress)}%</button>
                            ) : (
                              <button 
                                onClick={() => window.pywebview?.api?.download_ollama_model(m.tag)}
                                style={{ width: '100%', padding: '8px', background: 'var(--primary)', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold', transition: '0.2s' }}
                                className="hover-opacity"
                              >
                                Pull Model
                              </button>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', maxWidth: '600px' }}>
                  <div className="setting-card">
                    <div className="setting-card-icon"><Database size={20} /></div>
                    <div className="setting-card-content">
                      <h4>OpenAI API Key</h4>
                      <input type="password" value={apiKeys.openai} onChange={(e) => setApiKeys({...apiKeys, openai: e.target.value})} placeholder="sk-..." style={{ width: '100%', padding: '8px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '4px', marginTop: '8px' }} />
                    </div>
                    <button onClick={() => window.pywebview.api.save_api_key('openai', apiKeys.openai)} style={{ padding: '8px 16px', background: 'var(--primary)', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer' }}>Save</button>
                  </div>
                  
                  <div className="setting-card">
                    <div className="setting-card-icon"><Database size={20} /></div>
                    <div className="setting-card-content">
                      <h4>Anthropic API Key</h4>
                      <input type="password" value={apiKeys.anthropic} onChange={(e) => setApiKeys({...apiKeys, anthropic: e.target.value})} placeholder="sk-ant-..." style={{ width: '100%', padding: '8px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '4px', marginTop: '8px' }} />
                    </div>
                    <button onClick={() => window.pywebview.api.save_api_key('anthropic', apiKeys.anthropic)} style={{ padding: '8px 16px', background: 'var(--primary)', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer' }}>Save</button>
                  </div>
                  
                  <div className="setting-card">
                    <div className="setting-card-icon"><Database size={20} /></div>
                    <div className="setting-card-content">
                      <h4>Gemini API Key</h4>
                      <input type="password" value={apiKeys.gemini} onChange={(e) => setApiKeys({...apiKeys, gemini: e.target.value})} placeholder="AIzaSy..." style={{ width: '100%', padding: '8px', background: 'var(--bg)', border: '1px solid var(--border)', color: 'var(--text)', borderRadius: '4px', marginTop: '8px' }} />
                    </div>
                    <button onClick={() => window.pywebview.api.save_api_key('gemini', apiKeys.gemini)} style={{ padding: '8px 16px', background: 'var(--primary)', border: 'none', borderRadius: '4px', color: 'white', cursor: 'pointer' }}>Save</button>
                  </div>
                </div>
              )}`;

const oldModelsPartStart = app.indexOf("{modelHubTab === 'local' ? (");
const oldModelsPartEnd = app.indexOf("            </div>\n          ) : activeTab === 'downloads' ? (");
app = app.substring(0, oldModelsPartStart) + newModelsTab.trim() + '\n' + app.substring(oldModelsPartEnd);

// 4. Update About Us
const newAboutTab = `              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                <div className="setting-card">
                  <div className="setting-card-icon" style={{ background: 'var(--primary)', color: 'white' }}><Info size={24} /></div>
                  <div className="setting-card-content">
                    <h4 style={{ fontSize: '1.2rem', marginBottom: '8px' }}>RedVerse AI System</h4>
                    <p>Version 1.0.0 - Core Build</p>
                    <p style={{ marginTop: '10px' }}>An advanced agentic coding environment and system control hub powered by PyWebView and React.</p>
                  </div>
                </div>
                
                <div className="setting-card">
                  <div className="setting-card-content">
                    <h4 style={{ marginBottom: '15px' }}>Connect With Us</h4>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                      <a href="https://x.com/RedVerse_studio" target="_blank" rel="noreferrer" style={{ color: 'var(--text)', textDecoration: 'none', padding: '10px', background: 'var(--surface)', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                        <strong>Twitter / X</strong> <span style={{ color: 'var(--text-muted)' }}>@RedVerse_studio</span>
                      </a>
                      <a href="https://www.instagram.com/redverse_studio?igsh=MTdqOGY5MTNzeXA5ZA==" target="_blank" rel="noreferrer" style={{ color: 'var(--text)', textDecoration: 'none', padding: '10px', background: 'var(--surface)', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                        <strong>Instagram</strong> <span style={{ color: 'var(--text-muted)' }}>@redverse_studio</span>
                      </a>
                      <a href="https://redverse-genesis.vercel.app/" target="_blank" rel="noreferrer" style={{ color: 'var(--text)', textDecoration: 'none', padding: '10px', background: 'var(--surface)', borderRadius: '4px', display: 'flex', justifyContent: 'space-between' }}>
                        <strong>Official Website</strong> <span style={{ color: 'var(--text-muted)' }}>redverse-genesis</span>
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="setting-card">
                  <div className="setting-card-content">
                    <h4 style={{ marginBottom: '15px', color: 'var(--primary)' }}>NFT Collection</h4>
                    <p style={{ marginBottom: '15px' }}>Explore our exclusive digital assets and NFT collections that power the RedVerse ecosystem.</p>
                    <a href="https://opensea.io/RedVerse?collectionSlugs=redverse-genesis" target="_blank" rel="noreferrer" style={{ display: 'inline-block', background: 'var(--primary)', color: 'white', textDecoration: 'none', padding: '8px 16px', borderRadius: '4px', fontWeight: 'bold' }}>
                      View on OpenSea
                    </a>
                  </div>
                </div>
              </div>`;

const aboutStart = app.indexOf('<div className="setting-card">\n                <div className="setting-card-icon" style={{ background: \'var(--primary)\', color: \'white\' }}><Info size={24} /></div>');
const aboutEnd = app.indexOf('              </div>\n            </div>\n          )}');
app = app.substring(0, aboutStart) + newAboutTab.trim() + '\n' + app.substring(aboutEnd);

// 5. Cancel downloads logic in Downloads tab
const oldDownloadsInner = `                      <div style={{ width: '100%', height: '4px', background: 'var(--bg)', borderRadius: '2px', marginTop: '8px', overflow: 'hidden' }}>
                        <div style={{ width: \`\${data.progress}%\`, height: '100%', background: 'var(--primary)' }} />
                      </div>
                      <p style={{ marginTop: '4px' }}>{data.status === 'completed' ? 'Download Complete' : \`\${Math.round(data.progress)}%\`}</p>`;
                      
const newDownloadsInner = `                      <div style={{ width: '100%', height: '4px', background: 'var(--bg)', borderRadius: '2px', marginTop: '8px', overflow: 'hidden' }}>
                        <div style={{ width: \`\${data.progress}%\`, height: '100%', background: 'var(--primary)' }} />
                      </div>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '4px' }}>
                        <p>{data.status === 'completed' ? 'Download Complete' : \`\${Math.round(data.progress)}%\`}</p>
                        {!['completed', 'failed', 'canceled'].includes(data.status) && (
                          <X 
                            size={16} 
                            color="var(--text-muted)" 
                            style={{ cursor: 'pointer' }}
                            onClick={() => window.pywebview?.api?.cancel_download(name)}
                          />
                        )}
                      </div>`;
app = app.replace(oldDownloadsInner, newDownloadsInner);

fs.writeFileSync('d:/ai world/myapp/windows_app/redverse/src/App.jsx', app);
