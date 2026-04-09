import React, { useState } from "react";

const jobsData = [
  { id: 1, title: "Frontend Developer", company: "TechNova Pvt Ltd", location: "Bangalore", type: "Full-Time", salary: "₹4–6 LPA", category: "IT", logo: "TN", desc: "Build modern UIs with React and Tailwind. Work with a dynamic team on SaaS products.", skills: ["React", "CSS", "JavaScript"] },
  { id: 2, title: "Data Analyst", company: "InfoSoft Solutions", location: "Hyderabad", type: "Full-Time", salary: "₹3–5 LPA", category: "Data", logo: "IS", desc: "Analyze large datasets and generate business insights using Python and Power BI.", skills: ["Python", "SQL", "Power BI"] },
  { id: 3, title: "UI/UX Designer", company: "Pixel Studios", location: "Mumbai", type: "Remote", salary: "₹3–4.5 LPA", category: "Design", logo: "PS", desc: "Design intuitive interfaces for mobile and web apps. Figma proficiency required.", skills: ["Figma", "Adobe XD", "Prototyping"] },
  { id: 4, title: "Backend Developer", company: "CloudBase Inc", location: "Pune", type: "Full-Time", salary: "₹5–8 LPA", category: "IT", logo: "CB", desc: "Build scalable REST APIs using Node.js and PostgreSQL for enterprise clients.", skills: ["Node.js", "PostgreSQL", "REST API"] },
  { id: 5, title: "HR Executive", company: "PeopleFirst HR", location: "Delhi", type: "Part-Time", salary: "₹2–3 LPA", category: "HR", logo: "PF", desc: "Manage recruitment, onboarding and employee engagement for growing startups.", skills: ["Recruiting", "MS Office", "Communication"] },
  { id: 6, title: "Cybersecurity Analyst", company: "SecureNet Labs", location: "Chennai", type: "Full-Time", salary: "₹6–10 LPA", category: "IT", logo: "SN", desc: "Identify vulnerabilities and protect systems from cyber threats. CEH preferred.", skills: ["Kali Linux", "Network Security", "Python"] },
  { id: 7, title: "Content Writer", company: "WordCraft Agency", location: "Remote", type: "Freelance", salary: "₹1.5–3 LPA", category: "Marketing", logo: "WC", desc: "Write SEO-optimized blogs, product descriptions, and marketing copy.", skills: ["SEO", "Copywriting", "Research"] },
  { id: 8, title: "Mobile App Developer", company: "AppSphere Pvt Ltd", location: "Bangalore", type: "Full-Time", salary: "₹5–7 LPA", category: "IT", logo: "AP", desc: "Develop cross-platform apps with Flutter. Experience with Firebase a plus.", skills: ["Flutter", "Dart", "Firebase"] },
];

const categories = ["All", "IT", "Data", "Design", "HR", "Marketing"];
const jobTypes = ["All Types", "Full-Time", "Part-Time", "Remote", "Freelance"];

const logoColors = {
  TN: ["#1a1a2e", "#e94560"],
  IS: ["#0f3460", "#16213e"],
  PS: ["#e94560", "#1a1a2e"],
  CB: ["#533483", "#1a1a2e"],
  PF: ["#0f3460", "#533483"],
  SN: ["#e94560", "#0f3460"],
  WC: ["#16213e", "#533483"],
  AP: ["#1a1a2e", "#e94560"],
};

function Navbar({ page, setPage }) {
  return (
    <nav style={{
      background: "#0a0a14",
      borderBottom: "1px solid #1e1e3a",
      padding: "0 2rem",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      height: "64px",
      position: "sticky",
      top: 0,
      zIndex: 100,
      boxShadow: "0 2px 20px rgba(233,69,96,0.08)"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "0.5rem", cursor: "pointer" }} onClick={() => setPage("home")}>
        <div style={{
          width: 36, height: 36, borderRadius: "10px",
          background: "linear-gradient(135deg,#e94560,#533483)",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontWeight: 900, color: "#fff", fontSize: "1rem", letterSpacing: "-1px"
        }}>JP</div>
        <span style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem", letterSpacing: "-0.5px" }}>
          Job<span style={{ color: "#e94560" }}>Portal</span>
        </span>
      </div>
      <div style={{ display: "flex", gap: "0.25rem" }}>
        {[["home", "Home"], ["jobs", "Browse Jobs"], ["post", "Post a Job"], ["about", "About"]].map(([p, label]) => (
          <button key={p} onClick={() => setPage(p)} style={{
            background: page === p ? "rgba(233,69,96,0.15)" : "transparent",
            border: page === p ? "1px solid rgba(233,69,96,0.3)" : "1px solid transparent",
            color: page === p ? "#e94560" : "#aaa",
            padding: "0.4rem 1rem",
            borderRadius: "8px",
            cursor: "pointer",
            fontFamily: "'Syne', sans-serif",
            fontWeight: 600,
            fontSize: "0.85rem",
            transition: "all 0.2s"
          }}>{label}</button>
        ))}
      </div>
      <button onClick={() => setPage("login")} style={{
        background: "linear-gradient(135deg,#e94560,#c0392b)",
        border: "none", color: "#fff",
        padding: "0.5rem 1.4rem", borderRadius: "8px",
        cursor: "pointer", fontFamily: "'Syne', sans-serif",
        fontWeight: 700, fontSize: "0.85rem",
        boxShadow: "0 4px 15px rgba(233,69,96,0.3)",
        transition: "all 0.2s"
      }}>Sign In</button>
    </nav>
  );
}

function HomePage({ setPage }) {
  const [search, setSearch] = useState("");
  return (
    <div>
      {/* Hero */}
      <div style={{
        background: "linear-gradient(135deg, #0a0a14 0%, #0f0f2a 50%, #0a0a14 100%)",
        padding: "5rem 2rem 4rem",
        textAlign: "center",
        position: "relative",
        overflow: "hidden"
      }}>
        <div style={{
          position: "absolute", top: "10%", left: "5%", width: 300, height: 300,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(233,69,96,0.12) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{
          position: "absolute", bottom: "0%", right: "5%", width: 400, height: 400,
          borderRadius: "50%", background: "radial-gradient(circle, rgba(83,52,131,0.15) 0%, transparent 70%)",
          pointerEvents: "none"
        }} />
        <div style={{
          display: "inline-block",
          background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.3)",
          color: "#e94560", padding: "0.3rem 1rem", borderRadius: "20px",
          fontSize: "0.8rem", fontFamily: "'Syne', sans-serif", fontWeight: 600,
          marginBottom: "1.5rem", letterSpacing: "1px"
        }}>🚀 INDIA'S #1 JOB PORTAL</div>
        <h1 style={{
          fontFamily: "'Syne', sans-serif", fontSize: "clamp(2.2rem, 5vw, 4rem)",
          fontWeight: 900, color: "#fff", margin: "0 0 1rem",
          lineHeight: 1.1, letterSpacing: "-2px"
        }}>
          Find Your Dream Job<br />
          <span style={{ color: "#e94560" }}>Start Today.</span>
        </h1>
        <p style={{ color: "#888", fontSize: "1.1rem", maxWidth: 500, margin: "0 auto 2.5rem", lineHeight: 1.6 }}>
          Connecting top talent with leading companies across India. 10,000+ jobs updated daily.
        </p>
        <div style={{
          display: "flex", maxWidth: 580, margin: "0 auto 2rem",
          background: "#12122a", border: "1px solid #1e1e3a",
          borderRadius: "14px", overflow: "hidden",
          boxShadow: "0 8px 30px rgba(0,0,0,0.4)"
        }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="Search jobs, companies, skills..."
            style={{
              flex: 1, background: "transparent", border: "none",
              padding: "1rem 1.5rem", color: "#fff", fontSize: "1rem",
              fontFamily: "'Syne', sans-serif", outline: "none"
            }}
          />
          <button onClick={() => setPage("jobs")} style={{
            background: "linear-gradient(135deg,#e94560,#c0392b)",
            border: "none", color: "#fff", padding: "0 2rem",
            fontFamily: "'Syne', sans-serif", fontWeight: 700,
            fontSize: "0.95rem", cursor: "pointer"
          }}>Search →</button>
        </div>
        <div style={{ display: "flex", gap: "2rem", justifyContent: "center", flexWrap: "wrap" }}>
          {[["10K+", "Active Jobs"], ["5K+", "Companies"], ["50K+", "Job Seekers"], ["95%", "Success Rate"]].map(([num, label]) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ color: "#e94560", fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "1.6rem" }}>{num}</div>
              <div style={{ color: "#666", fontSize: "0.8rem" }}>{label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Featured Jobs */}
      <div style={{ background: "#070710", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "2rem" }}>
            <h2 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.8rem", margin: 0 }}>
              Featured <span style={{ color: "#e94560" }}>Jobs</span>
            </h2>
            <button onClick={() => setPage("jobs")} style={{
              background: "transparent", border: "1px solid #e94560",
              color: "#e94560", padding: "0.5rem 1.2rem", borderRadius: "8px",
              cursor: "pointer", fontFamily: "'Syne', sans-serif", fontWeight: 600, fontSize: "0.85rem"
            }}>View All →</button>
          </div>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.2rem" }}>
            {jobsData.slice(0, 4).map(job => <JobCard key={job.id} job={job} />)}
          </div>
        </div>
      </div>

      {/* Categories */}
      <div style={{ background: "#0a0a14", padding: "3rem 2rem" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto", textAlign: "center" }}>
          <h2 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.8rem", marginBottom: "2rem" }}>
            Browse by <span style={{ color: "#e94560" }}>Category</span>
          </h2>
          <div style={{ display: "flex", gap: "1rem", justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { icon: "💻", label: "Information Technology", count: 4200 },
              { icon: "📊", label: "Data & Analytics", count: 1800 },
              { icon: "🎨", label: "Design & Creative", count: 950 },
              { icon: "📣", label: "Marketing", count: 1200 },
              { icon: "👥", label: "Human Resources", count: 780 },
              { icon: "💼", label: "Finance & Accounts", count: 1500 },
            ].map(cat => (
              <div key={cat.label} onClick={() => setPage("jobs")} style={{
                background: "#12122a", border: "1px solid #1e1e3a",
                borderRadius: "12px", padding: "1.2rem 1.5rem",
                cursor: "pointer", transition: "all 0.2s", minWidth: 160,
                textAlign: "center"
              }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "#e94560"; e.currentTarget.style.background = "rgba(233,69,96,0.08)"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "#1e1e3a"; e.currentTarget.style.background = "#12122a"; }}
              >
                <div style={{ fontSize: "2rem", marginBottom: "0.5rem" }}>{cat.icon}</div>
                <div style={{ color: "#ddd", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "0.85rem" }}>{cat.label}</div>
                <div style={{ color: "#e94560", fontSize: "0.75rem", marginTop: "0.25rem" }}>{cat.count.toLocaleString()} jobs</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function JobCard({ job, onClick }) {
  const [hovered, setHovered] = useState(false);
  const colors = logoColors[job.logo] || ["#1a1a2e", "#e94560"];
  return (
    <div
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "#14142e" : "#0f0f22",
        border: `1px solid ${hovered ? "#e94560" : "#1e1e3a"}`,
        borderRadius: "14px", padding: "1.4rem",
        cursor: onClick ? "pointer" : "default",
        transition: "all 0.25s",
        boxShadow: hovered ? "0 8px 30px rgba(233,69,96,0.12)" : "none"
      }}
    >
      <div style={{ display: "flex", alignItems: "flex-start", gap: "1rem", marginBottom: "1rem" }}>
        <div style={{
          width: 46, height: 46, borderRadius: "10px",
          background: `linear-gradient(135deg, ${colors[0]}, ${colors[1]})`,
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontWeight: 900, fontSize: "0.85rem",
          fontFamily: "'Syne', sans-serif", flexShrink: 0,
          border: "1px solid rgba(255,255,255,0.1)"
        }}>{job.logo}</div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 700, fontSize: "1rem", marginBottom: "0.2rem" }}>{job.title}</div>
          <div style={{ color: "#888", fontSize: "0.82rem" }}>{job.company}</div>
        </div>
        <span style={{
          background: job.type === "Remote" ? "rgba(83,52,131,0.3)" : "rgba(233,69,96,0.1)",
          color: job.type === "Remote" ? "#a78bfa" : "#e94560",
          border: `1px solid ${job.type === "Remote" ? "rgba(167,139,250,0.3)" : "rgba(233,69,96,0.2)"}`,
          padding: "0.2rem 0.7rem", borderRadius: "20px",
          fontSize: "0.72rem", fontWeight: 700, fontFamily: "'Syne', sans-serif",
          whiteSpace: "nowrap"
        }}>{job.type}</span>
      </div>
      <p style={{ color: "#666", fontSize: "0.82rem", lineHeight: 1.6, margin: "0 0 1rem" }}>{job.desc}</p>
      <div style={{ display: "flex", gap: "0.4rem", flexWrap: "wrap", marginBottom: "1rem" }}>
        {job.skills.map(s => (
          <span key={s} style={{
            background: "rgba(255,255,255,0.04)", border: "1px solid #1e1e3a",
            color: "#aaa", padding: "0.2rem 0.6rem",
            borderRadius: "6px", fontSize: "0.72rem", fontFamily: "'Syne', sans-serif"
          }}>{s}</span>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div style={{ display: "flex", gap: "1rem" }}>
          <span style={{ color: "#555", fontSize: "0.78rem" }}>📍 {job.location}</span>
          <span style={{ color: "#e94560", fontSize: "0.78rem", fontWeight: 700 }}>💰 {job.salary}</span>
        </div>
      </div>
    </div>
  );
}

function JobsPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [type, setType] = useState("All Types");
  const [selected, setSelected] = useState(null);

  const filtered = jobsData.filter(j => {
    const matchSearch = j.title.toLowerCase().includes(search.toLowerCase()) ||
      j.company.toLowerCase().includes(search.toLowerCase()) ||
      j.skills.some(s => s.toLowerCase().includes(search.toLowerCase()));
    const matchCat = category === "All" || j.category === category;
    const matchType = type === "All Types" || j.type === type;
    return matchSearch && matchCat && matchType;
  });

  return (
    <div style={{ background: "#070710", minHeight: "calc(100vh - 64px)", padding: "2rem" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <h1 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem", marginBottom: "1.5rem" }}>
          Browse <span style={{ color: "#e94560" }}>Jobs</span>
          <span style={{ color: "#444", fontSize: "1rem", fontWeight: 500, marginLeft: "1rem" }}>{filtered.length} results</span>
        </h1>

        {/* Filters */}
        <div style={{ display: "flex", gap: "1rem", marginBottom: "2rem", flexWrap: "wrap" }}>
          <input
            value={search}
            onChange={e => setSearch(e.target.value)}
            placeholder="🔍  Search title, company, skills..."
            style={{
              background: "#12122a", border: "1px solid #1e1e3a",
              color: "#fff", padding: "0.7rem 1.2rem",
              borderRadius: "10px", fontSize: "0.9rem",
              fontFamily: "'Syne', sans-serif", outline: "none", flex: 1, minWidth: 220
            }}
          />
          <select value={category} onChange={e => setCategory(e.target.value)} style={{
            background: "#12122a", border: "1px solid #1e1e3a",
            color: "#aaa", padding: "0.7rem 1.2rem",
            borderRadius: "10px", fontSize: "0.88rem",
            fontFamily: "'Syne', sans-serif", outline: "none", cursor: "pointer"
          }}>
            {categories.map(c => <option key={c}>{c}</option>)}
          </select>
          <select value={type} onChange={e => setType(e.target.value)} style={{
            background: "#12122a", border: "1px solid #1e1e3a",
            color: "#aaa", padding: "0.7rem 1.2rem",
            borderRadius: "10px", fontSize: "0.88rem",
            fontFamily: "'Syne', sans-serif", outline: "none", cursor: "pointer"
          }}>
            {jobTypes.map(t => <option key={t}>{t}</option>)}
          </select>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))", gap: "1.2rem" }}>
          {filtered.map(job => (
            <JobCard key={job.id} job={job} onClick={() => setSelected(job)} />
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem", color: "#444" }}>
            <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>🔍</div>
            <div style={{ fontFamily: "'Syne', sans-serif", fontSize: "1.2rem", color: "#666" }}>No jobs found. Try different filters.</div>
          </div>
        )}
      </div>

      {/* Job Detail Modal */}
      {selected && (
        <div style={{
          position: "fixed", inset: 0, background: "rgba(0,0,0,0.85)",
          display: "flex", alignItems: "center", justifyContent: "center",
          zIndex: 1000, padding: "1rem", backdropFilter: "blur(4px)"
        }} onClick={() => setSelected(null)}>
          <div onClick={e => e.stopPropagation()} style={{
            background: "#0f0f22", border: "1px solid #1e1e3a",
            borderRadius: "20px", padding: "2rem", maxWidth: 520,
            width: "100%", boxShadow: "0 20px 60px rgba(0,0,0,0.6)",
            maxHeight: "85vh", overflowY: "auto"
          }}>
            <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "1.5rem" }}>
              <div style={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "12px",
                  background: `linear-gradient(135deg, ${(logoColors[selected.logo] || ["#1a1a2e", "#e94560"])[0]}, ${(logoColors[selected.logo] || ["#1a1a2e", "#e94560"])[1]})`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", fontWeight: 900, fontSize: "1rem", fontFamily: "'Syne', sans-serif"
                }}>{selected.logo}</div>
                <div>
                  <div style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.2rem" }}>{selected.title}</div>
                  <div style={{ color: "#888", fontSize: "0.85rem" }}>{selected.company}</div>
                </div>
              </div>
              <button onClick={() => setSelected(null)} style={{
                background: "rgba(255,255,255,0.05)", border: "1px solid #1e1e3a",
                color: "#aaa", width: 36, height: 36, borderRadius: "8px",
                cursor: "pointer", fontSize: "1rem", display: "flex",
                alignItems: "center", justifyContent: "center"
              }}>✕</button>
            </div>

            <div style={{ display: "flex", gap: "0.8rem", marginBottom: "1.5rem", flexWrap: "wrap" }}>
              {[["📍", selected.location], ["⏱", selected.type], ["💰", selected.salary], ["📂", selected.category]].map(([icon, val]) => (
                <span key={val} style={{
                  background: "rgba(255,255,255,0.04)", border: "1px solid #1e1e3a",
                  color: "#bbb", padding: "0.35rem 0.8rem",
                  borderRadius: "8px", fontSize: "0.8rem"
                }}>{icon} {val}</span>
              ))}
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: "#e94560", fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "0.5rem", fontSize: "0.9rem" }}>JOB DESCRIPTION</div>
              <p style={{ color: "#999", lineHeight: 1.7, fontSize: "0.88rem", margin: 0 }}>{selected.desc} This is a great opportunity to work with industry professionals and grow your career. You will be expected to collaborate with cross-functional teams and deliver high-quality work within deadlines.</p>
            </div>

            <div style={{ marginBottom: "1.5rem" }}>
              <div style={{ color: "#e94560", fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "0.7rem", fontSize: "0.9rem" }}>REQUIRED SKILLS</div>
              <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
                {selected.skills.map(s => (
                  <span key={s} style={{
                    background: "rgba(233,69,96,0.1)", border: "1px solid rgba(233,69,96,0.2)",
                    color: "#e94560", padding: "0.3rem 0.8rem",
                    borderRadius: "8px", fontSize: "0.82rem", fontWeight: 600,
                    fontFamily: "'Syne', sans-serif"
                  }}>{s}</span>
                ))}
              </div>
            </div>

            <button style={{
              width: "100%", background: "linear-gradient(135deg,#e94560,#c0392b)",
              border: "none", color: "#fff", padding: "0.9rem",
              borderRadius: "12px", fontSize: "1rem", fontWeight: 700,
              fontFamily: "'Syne', sans-serif", cursor: "pointer",
              boxShadow: "0 6px 20px rgba(233,69,96,0.35)",
              letterSpacing: "0.5px"
            }}>Apply Now →</button>
          </div>
        </div>
      )}
    </div>
  );
}

function PostJobPage() {
  const [form, setForm] = useState({ title: "", company: "", location: "", type: "Full-Time", salary: "", category: "IT", desc: "" });
  const [submitted, setSubmitted] = useState(false);
  const update = (k, v) => setForm(f => ({ ...f, [k]: v }));

  if (submitted) return (
    <div style={{ background: "#070710", minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "4rem", marginBottom: "1rem" }}>🎉</div>
        <h2 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem", marginBottom: "0.5rem" }}>Job Posted Successfully!</h2>
        <p style={{ color: "#666" }}>Your job listing is now live and visible to thousands of candidates.</p>
        <button onClick={() => setSubmitted(false)} style={{
          marginTop: "1.5rem", background: "linear-gradient(135deg,#e94560,#c0392b)",
          border: "none", color: "#fff", padding: "0.8rem 2rem",
          borderRadius: "10px", fontFamily: "'Syne', sans-serif",
          fontWeight: 700, cursor: "pointer", fontSize: "0.95rem"
        }}>Post Another Job</button>
      </div>
    </div>
  );

  const inputStyle = {
    width: "100%", background: "#12122a", border: "1px solid #1e1e3a",
    color: "#fff", padding: "0.8rem 1.2rem", borderRadius: "10px",
    fontSize: "0.9rem", fontFamily: "'Syne', sans-serif", outline: "none",
    boxSizing: "border-box", marginTop: "0.4rem"
  };
  const labelStyle = { color: "#aaa", fontSize: "0.82rem", fontFamily: "'Syne', sans-serif", fontWeight: 600, letterSpacing: "0.5px" };

  return (
    <div style={{ background: "#070710", minHeight: "calc(100vh - 64px)", padding: "3rem 2rem" }}>
      <div style={{ maxWidth: 600, margin: "0 auto" }}>
        <h1 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "2rem", marginBottom: "0.5rem" }}>
          Post a <span style={{ color: "#e94560" }}>Job</span>
        </h1>
        <p style={{ color: "#555", marginBottom: "2rem", fontSize: "0.9rem" }}>Fill in the details below to list your job opening.</p>

        <div style={{ display: "flex", flexDirection: "column", gap: "1.2rem" }}>
          {[
            { key: "title", label: "JOB TITLE", placeholder: "e.g. React Developer" },
            { key: "company", label: "COMPANY NAME", placeholder: "e.g. TechNova Pvt Ltd" },
            { key: "location", label: "LOCATION", placeholder: "e.g. Bangalore / Remote" },
            { key: "salary", label: "SALARY RANGE", placeholder: "e.g. ₹4–6 LPA" },
          ].map(f => (
            <div key={f.key}>
              <label style={labelStyle}>{f.label}</label>
              <input value={form[f.key]} onChange={e => update(f.key, e.target.value)} placeholder={f.placeholder} style={inputStyle} />
            </div>
          ))}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
            <div>
              <label style={labelStyle}>JOB TYPE</label>
              <select value={form.type} onChange={e => update("type", e.target.value)} style={{ ...inputStyle }}>
                {["Full-Time", "Part-Time", "Remote", "Freelance"].map(t => <option key={t}>{t}</option>)}
              </select>
            </div>
            <div>
              <label style={labelStyle}>CATEGORY</label>
              <select value={form.category} onChange={e => update("category", e.target.value)} style={{ ...inputStyle }}>
                {["IT", "Data", "Design", "HR", "Marketing"].map(c => <option key={c}>{c}</option>)}
              </select>
            </div>
          </div>
          <div>
            <label style={labelStyle}>JOB DESCRIPTION</label>
            <textarea value={form.desc} onChange={e => update("desc", e.target.value)}
              placeholder="Describe the role, responsibilities, and requirements..."
              rows={5}
              style={{ ...inputStyle, resize: "vertical", lineHeight: 1.6 }}
            />
          </div>
          <button onClick={() => { if (form.title && form.company) setSubmitted(true); }} style={{
            background: "linear-gradient(135deg,#e94560,#c0392b)",
            border: "none", color: "#fff", padding: "1rem",
            borderRadius: "12px", fontSize: "1rem", fontWeight: 700,
            fontFamily: "'Syne', sans-serif", cursor: "pointer",
            boxShadow: "0 6px 20px rgba(233,69,96,0.35)"
          }}>Post Job →</button>
        </div>
      </div>
    </div>
  );
}

function AboutPage() {
  return (
    <div style={{ background: "#070710", minHeight: "calc(100vh - 64px)", padding: "4rem 2rem" }}>
      <div style={{ maxWidth: 800, margin: "0 auto", textAlign: "center" }}>
        <h1 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 900, fontSize: "2.5rem", marginBottom: "1rem" }}>
          About <span style={{ color: "#e94560" }}>JobPortal</span>
        </h1>
        <p style={{ color: "#777", fontSize: "1rem", lineHeight: 1.8, marginBottom: "3rem" }}>
          JobPortal is India's fastest growing recruitment platform, built to bridge the gap between talented job seekers and top-tier companies. Our mission is to make job searching transparent, simple, and effective for everyone.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: "1.5rem", textAlign: "left" }}>
          {[
            { icon: "🎯", title: "Our Mission", desc: "Connect every qualified candidate with the right opportunity, removing barriers in the hiring process." },
            { icon: "🔒", title: "Safe & Secure", desc: "All listings are verified. We protect your personal data with industry-standard encryption." },
            { icon: "⚡", title: "Fast & Easy", desc: "Apply to jobs in one click. Get notified instantly. Our platform is built for speed." },
            { icon: "🌍", title: "Pan-India Reach", desc: "Jobs available across 50+ cities and fully remote roles from top Indian and global companies." },
          ].map(item => (
            <div key={item.title} style={{
              background: "#0f0f22", border: "1px solid #1e1e3a",
              borderRadius: "14px", padding: "1.5rem"
            }}>
              <div style={{ fontSize: "2rem", marginBottom: "0.8rem" }}>{item.icon}</div>
              <div style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "0.5rem" }}>{item.title}</div>
              <div style={{ color: "#666", fontSize: "0.85rem", lineHeight: 1.6 }}>{item.desc}</div>
            </div>
          ))}
        </div>
        <div style={{ marginTop: "3rem", padding: "2rem", background: "#0f0f22", border: "1px solid #1e1e3a", borderRadius: "16px" }}>
          <div style={{ color: "#e94560", fontFamily: "'Syne', sans-serif", fontWeight: 700, marginBottom: "0.5rem", letterSpacing: "1px", fontSize: "0.85rem" }}>BCA FINAL YEAR PROJECT</div>
          <div style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.4rem", marginBottom: "0.5rem" }}>Developed with React JS</div>
          <div style={{ color: "#555", fontSize: "0.85rem" }}>This project was developed as a BCA Final Year Project demonstrating modern web development techniques including React Hooks, component-based architecture, state management, and responsive UI design.</div>
        </div>
      </div>
    </div>
  );
}

function LoginPage({ setPage }) {
  const [tab, setTab] = useState("login");
  const [done, setDone] = useState(false);
  const inputStyle = {
    width: "100%", background: "#12122a", border: "1px solid #1e1e3a",
    color: "#fff", padding: "0.8rem 1.2rem", borderRadius: "10px",
    fontSize: "0.9rem", fontFamily: "'Syne', sans-serif", outline: "none",
    boxSizing: "border-box"
  };
  if (done) return (
    <div style={{ background: "#070710", minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
        <h2 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontSize: "1.8rem", fontWeight: 800 }}>{tab === "login" ? "Welcome Back!" : "Account Created!"}</h2>
        <p style={{ color: "#666", marginBottom: "1.5rem" }}>You are now signed in to JobPortal.</p>
        <button onClick={() => { setDone(false); setPage("home"); }} style={{
          background: "linear-gradient(135deg,#e94560,#c0392b)", border: "none", color: "#fff",
          padding: "0.8rem 2rem", borderRadius: "10px", fontFamily: "'Syne', sans-serif",
          fontWeight: 700, cursor: "pointer"
        }}>Go to Home →</button>
      </div>
    </div>
  );
  return (
    <div style={{ background: "#070710", minHeight: "calc(100vh - 64px)", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" }}>
      <div style={{ background: "#0f0f22", border: "1px solid #1e1e3a", borderRadius: "20px", padding: "2.5rem", maxWidth: 420, width: "100%" }}>
        <div style={{ display: "flex", gap: "0.5rem", marginBottom: "2rem", background: "#070710", borderRadius: "10px", padding: "0.3rem" }}>
          {["login", "register"].map(t => (
            <button key={t} onClick={() => setTab(t)} style={{
              flex: 1, padding: "0.6rem", borderRadius: "8px", border: "none",
              background: tab === t ? "linear-gradient(135deg,#e94560,#c0392b)" : "transparent",
              color: tab === t ? "#fff" : "#666",
              fontFamily: "'Syne', sans-serif", fontWeight: 700,
              cursor: "pointer", fontSize: "0.88rem", transition: "all 0.2s"
            }}>{t === "login" ? "Sign In" : "Register"}</button>
          ))}
        </div>
        <h2 style={{ color: "#fff", fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: "1.5rem", marginBottom: "1.5rem" }}>
          {tab === "login" ? "Welcome Back 👋" : "Create Account 🚀"}
        </h2>
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {tab === "register" && <input placeholder="Full Name" style={inputStyle} />}
          <input placeholder="Email Address" type="email" style={inputStyle} />
          <input placeholder="Password" type="password" style={inputStyle} />
          {tab === "register" && <input placeholder="Confirm Password" type="password" style={inputStyle} />}
          <button onClick={() => setDone(true)} style={{
            background: "linear-gradient(135deg,#e94560,#c0392b)", border: "none",
            color: "#fff", padding: "0.9rem", borderRadius: "10px",
            fontFamily: "'Syne', sans-serif", fontWeight: 700, cursor: "pointer", fontSize: "0.95rem",
            boxShadow: "0 6px 20px rgba(233,69,96,0.3)", marginTop: "0.5rem"
          }}>{tab === "login" ? "Sign In →" : "Create Account →"}</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [page, setPage] = useState("home");

  return (
    <div style={{ minHeight: "100vh", background: "#070710", fontFamily: "'Syne', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800;900&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { background: #070710; }
        ::-webkit-scrollbar { width: 6px; } 
        ::-webkit-scrollbar-track { background: #0a0a14; }
        ::-webkit-scrollbar-thumb { background: #e94560; border-radius: 3px; }
        select option { background: #12122a; color: #fff; }
      `}</style>
      <Navbar page={page} setPage={setPage} />
      {page === "home" && <HomePage setPage={setPage} />}
      {page === "jobs" && <JobsPage />}
      {page === "post" && <PostJobPage />}
      {page === "about" && <AboutPage />}
      {page === "login" && <LoginPage setPage={setPage} />}
    </div>
  );
}
