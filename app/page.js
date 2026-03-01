'use client'
import styles from './page.module.css'
import { useState, useEffect } from 'react'

const PROJECTS = [
  {
    id: '01',
    title: 'Privacy Audit Tool',
    tag: 'security',
    year: '2025',
    desc: 'Full-stack privacy audit suite combining facial recognition, OSINT research pipelines, and AI-powered analysis to surface exposure risks.',
    stack: ['Python', 'AI/ML', 'OSINT'],
    metric: 'multi-vector OSINT',
    href: 'https://github.com/Osker35/privacy-audit-tool',
  },
  {
    id: '02',
    title: 'thru.io',
    tag: 'ai / web',
    year: '2026',
    desc: 'Mac-a-Thon 2026 hackathon project. A voice-driven, AI-powered drive-thru ordering system — fully automated end-to-end.',
    stack: ['JavaScript', 'AI', 'Voice API'],
    metric: 'hackathon build',
    href: 'https://github.com/Erunixz/thru.io',
  },
  {
    id: '03',
    title: 'FiveM Server Platform',
    tag: 'backend',
    year: '2021–23',
    desc: 'Led a team of 40+ staff running a production FiveM game server. Built backend systems and continuous script pipelines to maintain uptime and performance.',
    stack: ['Lua', 'JavaScript', 'SQL'],
    metric: '40+ person team',
    href: '#',
  },
  {
    id: '04',
    title: 'Codexart Internship',
    tag: 'security / web',
    year: '2024',
    desc: 'Backend web development and vulnerability patching at Codexart Studios. Audited existing codebases for security flaws and provided ongoing client support.',
    stack: ['HTML', 'CSS', 'JS', 'C'],
    metric: 'Summer 2024',
    href: '#',
  },
]

const STACK = [
  { name: 'Python / scripting & exploits', level: 85 },
  { name: 'C / C++ / systems & low-level', level: 75 },
  { name: 'Bash / PowerShell / automation', level: 80 },
  { name: 'Lua / JS / web & game servers', level: 70 },
]

const NODES = [
  { x: 15, y: 20 }, { x: 45, y: 12 }, { x: 78, y: 22 },
  { x: 22, y: 52 }, { x: 55, y: 48 }, { x: 85, y: 55 },
  { x: 30, y: 78 }, { x: 62, y: 82 }, { x: 88, y: 80 },
]
const EDGES = [
  [0,1],[1,2],[0,3],[1,4],[2,5],[3,4],[4,5],[3,6],[4,7],[5,8],[6,7],[7,8]
]

export default function Home() {
  const [time, setTime] = useState('')
  const [date, setDate] = useState('')
  const [tick, setTick] = useState(0)
  const [activeProject, setActiveProject] = useState(null)

  useEffect(() => {
    const update = () => {
      const now = new Date()
      setTime(now.toTimeString().slice(0, 8))
      setDate(now.toLocaleDateString('en-US', { month: 'short', day: '2-digit', year: 'numeric' }))
      setTick(t => t + 1)
    }
    update()
    const id = setInterval(update, 1000)
    return () => clearInterval(id)
  }, [])

  const signal = ((tick * 17) % 100).toString().padStart(3, '0')
  const memUtil = (((tick * 3) % 40) + 55).toString()
  const activeEdge = EDGES[tick % EDGES.length]

  return (
    <main className={styles.main}>

      {/* ── TOP NAV ── */}
      <nav className={styles.topbar}>
        <div className={styles.topbarLeft}>
          <span className={styles.topbarLogo}>EU</span>
          <span className={styles.topbarSep} />
          <span className={styles.topbarSub}>emre.ulker / v1.0</span>
        </div>
        <div className={styles.topbarCenter}>
          {['work', 'about', 'contact'].map(s => (
            <a key={s} href={`#${s}`} className={styles.topbarLink}>{s}</a>
          ))}
        </div>
        <div className={styles.topbarRight}>
          <span className={styles.onlineBadge}>
            <span className={styles.onlineDot} />
            SYS.ONLINE
          </span>
          <span className={styles.topbarTime}>{time}</span>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className={styles.hero}>

        {/* LEFT */}
        <div className={styles.heroLeft}>
          <div className={styles.heroMeta}>
            <span className={styles.coordTag}>x:0000 / y:0000</span>
            <span className={styles.coordTag}>TORONTO, CA</span>
          </div>

          <div className={styles.nameAsciiRow}>
            <h1 className={styles.heroName}>
              Emre<br />
              <em>Ulker</em>
            </h1>
            <div className={styles.asciiWrap}>
              <pre className={styles.asciiArt}>{`#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#####################################################################################################
#############################################++++--...  ...  -+######################################
########################################++-. ...                  ..+################################
#######################################-.                          ..-+##############################
######################################+.                                .+###########################
#####################################-                                    -##########################
###################################.                                        -########################
################################-.                                           .#######################
###############################-                                              -######################
##############################-            ..............                      .#####################
#############################.             .......-----...                      .+###################
############################.             ......----+--.....                      .##################
##########################+.       ....-------++####+++---....     .....           .#################
#########################+.      .-++######################+--..      ..            .################
#########################.      .+#############################++-..                .+###############
########################+      .+##################################+-...            -################
########################.     .+#####################################++-...         -################
########################.     -+###########################################-.       +################
########################.    .-+############################################-       +################
########################.    .-#############################################-.      #################
########################.    .-+###########################################+-.      #################
########################-    .++###########################################+.      .#################
########################-   ..+############################################-.      -#################
########################+. .-+#############################################+.      +#################
########################-. -################################################-     .##################
########################-  +####+++---+++####################################.    .##################
#######################+- .###+.          ...--++##############+#++++--++####+.   .##################
#######################+. -##+-..........       .-####+......             -###.  .+##################
#####################+++-.+###++++-.---.....  ..-+####+-..       ....------###-  .-##################
#####################+++-.######+-.. .     .. .-+#######+-.        .---++#####+  .+#+################
######################++.-######++---+-. .-+-.-+++######++-..-.   .-..-+#######..+#++################
#######################+.+##########+++++++++++++##########++++++++++##########..####################
#######################+-+###################+++###############################--####################
#######################+-+#####################################################--####################
########################+#######################+##############################-+####################
##############################################+++##############################+#####################
#############################################+++#####################################################
###########################################+++++###########+#########################################
##########################################+++++######################################################
##########################################+++++-++######++###########################################
##########################################+++++++++---++++###########################################
############################################+++++++++####+###########################################
#####################################################################################################
#####################################################################################################
##########################################+-.....------------++######################################
########################+--..+###############+++++++++++++###########################################
#############+++-.           .+################+++++++++####################   -#####################
##########+-.     .           -###############++++----+++###################      .-#################
###########+.                 -##++#################################+#######.         .+#############
#############-.               -###+++++++########################+++++######. ...        -###########
############+--.              -####++++++######################++++-++######.    ..     .--##########
############+.                .#####+---++++#################+++--++########.     .....----+#########
############.                 .-#####+----++++#+##########++++---++#########.       ..    .-#########
##########-.                    -+####++--..---+++++++++++------+###########.             -##########
#########-.                       -#####++--.................-+############+            -############
#########..                         -++##+++--...        ..-++#############.            -############
########-.                           .-++++++----.......--++++###########+.               -##########
########-.                             .-+++++++--------++++############-                  .+########
########+.                                -++++++++++++++#############+.                     .+######
#########.                                 .-#######################+-                          .--##
#########-                                   .+###################-.                               ..
########+.                                     .+##############+.                                    
#####+..                                         .+##########-                                       
###-.                                              .+#####+.                                         
...                                                   .-.                                            `}</pre>
            </div>
          </div>

          <p className={styles.heroBio}>
            CS student at McMaster University &amp;<br />
            penetration tester. Interested in offensive<br />
            security, OSINT, and systems programming.
          </p>

          <div className={styles.statusRow}>
            <span className={styles.onlineDot} />
            <span className={styles.statusText}>open to opportunities</span>
            <span className={styles.cursor}>_</span>
          </div>

          <div className={styles.heroCtas}>
            <a href="#work" className={styles.ctaPrimary}>view work</a>
            <a href="mailto:emreulker35@gmail.com" className={styles.ctaGhost}>get in touch ↗</a>
          </div>
        </div>

        {/* RIGHT — tech panels */}
        <div className={styles.heroRight}>

          {/* Circuit graph */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span>NETWORK_GRAPH</span>
              <span className={styles.panelTag}>topology</span>
            </div>
            <div className={styles.svgWrap}>
              <svg viewBox="0 0 100 100" className={styles.circuitSvg} preserveAspectRatio="xMidYMid meet">
                {[25, 50, 75].map(v => (
                  <g key={v}>
                    <line x1={v} y1="0" x2={v} y2="100" stroke="#1C1C1C" strokeWidth="0.4"/>
                    <line x1="0" y1={v} x2="100" y2={v} stroke="#1C1C1C" strokeWidth="0.4"/>
                  </g>
                ))}
                {EDGES.map(([a,b], i) => (
                  <line key={i}
                    x1={NODES[a].x} y1={NODES[a].y}
                    x2={NODES[b].x} y2={NODES[b].y}
                    stroke="#252525" strokeWidth="0.8"
                  />
                ))}
                {activeEdge && (
                  <line
                    x1={NODES[activeEdge[0]].x} y1={NODES[activeEdge[0]].y}
                    x2={NODES[activeEdge[1]].x} y2={NODES[activeEdge[1]].y}
                    stroke="#FF3B1F" strokeWidth="1" opacity="0.7"
                  />
                )}
                {NODES.map((n, i) => (
                  <g key={i}>
                    <circle cx={n.x} cy={n.y} r="2.5" fill="#0A0A0A" stroke="#333" strokeWidth="0.6"/>
                    <circle cx={n.x} cy={n.y} r="0.8" fill="#FF3B1F"/>
                  </g>
                ))}
              </svg>
            </div>
          </div>

          {/* System readout */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span>SYS.READOUT</span>
              <span className={styles.onlineDot}/>
            </div>
            {[
              ['STATUS',   'OPERATIONAL'],
              ['SIGNAL',   `${signal} Hz`],
              ['MEM.UTIL', `${memUtil}%`],
              ['UPTIME',   time],
              ['BUILD',    'next.js / 14'],
            ].map(([k, v]) => (
              <div key={k} className={styles.sysRow}>
                <span className={styles.sysKey}>{k}</span>
                <span className={`${styles.sysVal} ${k === 'STATUS' ? styles.sysGreen : ''}`}>{v}</span>
              </div>
            ))}
          </div>

          {/* Stack bars */}
          <div className={styles.panel}>
            <div className={styles.panelHeader}>
              <span>PROFICIENCY</span>
              <span className={styles.panelTag}>stack</span>
            </div>
            {STACK.map(s => (
              <div key={s.name} className={styles.stackRow}>
                <span className={styles.stackName}>{s.name}</span>
                <div className={styles.barTrack}>
                  <div className={styles.barFill} style={{ width: `${s.level}%` }} />
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ── WORK ── */}
      <section id="work" className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.secNum}>01</span>
          <span className={styles.secLabel}>SELECTED WORK</span>
          <div className={styles.secLine}/>
          <span className={styles.secCount}>{PROJECTS.length} projects</span>
        </div>

        <div className={styles.projectsGrid}>
          {PROJECTS.map(p => (
            <a
              key={p.id}
              href={p.href !== '#' ? p.href : undefined}
              target={p.href !== '#' ? '_blank' : undefined}
              rel="noreferrer"
              className={`${styles.card} ${activeProject === p.id ? styles.cardActive : ''}`}
              onMouseEnter={() => setActiveProject(p.id)}
              onMouseLeave={() => setActiveProject(null)}
            >
              <span className={`${styles.corner} ${styles.tl}`}/>
              <span className={`${styles.corner} ${styles.tr}`}/>
              <span className={`${styles.corner} ${styles.bl}`}/>
              <span className={`${styles.corner} ${styles.br}`}/>
              <div className={styles.cardHead}>
                <span className={styles.cardNum}>{p.id}</span>
                <span className={styles.cardTag}>{p.tag}</span>
                <span className={styles.cardYear}>{p.year}</span>
              </div>
              <h2 className={styles.cardTitle}>{p.title}</h2>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.cardFoot}>
                <div className={styles.pills}>
                  {p.stack.map(t => <span key={t} className={styles.pill}>{t}</span>)}
                </div>
                <span className={styles.metric}>{p.metric}</span>
              </div>
            </a>
          ))}
        </div>
      </section>

      {/* ── ABOUT ── */}
      <section id="about" className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.secNum}>02</span>
          <span className={styles.secLabel}>ABOUT</span>
          <div className={styles.secLine}/>
        </div>

        <div className={styles.aboutGrid}>
          <div className={styles.aboutLeft}>
            <h3 className={styles.aboutHed}>
              I think like<br/>
              <em>the adversary,</em><br/>
              not the defender.
            </h3>
            <div className={styles.extLinks}>
              <a href="https://github.com/Osker35" className={styles.extLink} target="_blank" rel="noreferrer">github ↗</a>
              <a href="https://www.linkedin.com/in/emre-sudi-ulker-17b2a1325/" className={styles.extLink} target="_blank" rel="noreferrer">linkedin ↗</a>
              <a href="https://ctf.hackthebox.com/user/profile/901399" className={styles.extLink} target="_blank" rel="noreferrer">hackthebox ↗</a>
            </div>
          </div>

          <div className={styles.aboutMid}>
            <p>Currently studying Computer Science at McMaster University (graduating 2029), with a focus on cybersecurity and penetration testing. I work at NetSentra and have interned at Codexart Studios, where I patched vulnerabilities and built backend systems.</p>
            <br/>
            <p>Beyond the screen: 12 years of drumming, local jazz gigs, music production, and hiking. Security is creative work — I approach it like improvisation.</p>
          </div>

          <div className={styles.terminal}>
            <div className={styles.termBar}>
              <span className={styles.termDot} style={{background:'#FF5F57'}}/>
              <span className={styles.termDot} style={{background:'#FEBC2E'}}/>
              <span className={styles.termDot} style={{background:'#28C840'}}/>
              <span className={styles.termTitle}>alex@machine ~ </span>
            </div>
            <div className={styles.termBody}>
              <p><span className={styles.prompt}>$</span> whoami</p>
              <p className={styles.termOut}>emre_ulker — pentester, builder</p>
              <p><span className={styles.prompt}>$</span> cat interests.txt</p>
              <p className={styles.termOut}>offensive sec, OSINT, cloud pentesting,</p>
              <p className={styles.termOut}>red teaming, mobile security</p>
              <p><span className={styles.prompt}>$</span> echo $LOCATION</p>
              <p className={styles.termOut}>Toronto, ON / McMaster University</p>
              <p><span className={styles.prompt}>$</span><span className={styles.cursor}> _</span></p>
            </div>
          </div>
        </div>
      </section>

      {/* ── CONTACT ── */}
      <section id="contact" className={styles.section}>
        <div className={styles.sectionHead}>
          <span className={styles.secNum}>03</span>
          <span className={styles.secLabel}>CONTACT</span>
          <div className={styles.secLine}/>
        </div>
        <div className={styles.contactWrap}>
          <p className={styles.contactSub}>Let's build something.</p>
          <a href="mailto:emreulker35@gmail.com" className={styles.contactEmail}>emreulker35@gmail.com</a>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className={styles.footer}>
        <span>© 2025 Emre Ulker</span>
        <span>{date} / {time}</span>
        <span>next.js</span>
      </footer>

    </main>
  )
}