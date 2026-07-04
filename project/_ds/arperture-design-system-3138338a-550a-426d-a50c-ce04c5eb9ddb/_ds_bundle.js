/* @ds-bundle: {"format":3,"namespace":"ArpertureDesignSystem_313833","components":[],"sourceHashes":{"ui_kits/website/Booking.jsx":"46f68edd0377","ui_kits/website/Footer.jsx":"bef7fcc01080","ui_kits/website/Hero.jsx":"fd5654f1387a","ui_kits/website/Nav.jsx":"c5be4d018651","ui_kits/website/Services.jsx":"58a8db1eb034","ui_kits/website/Work.jsx":"748d3336da42","ui_kits/website/app.jsx":"2f39ec19686d","ui_kits/website/primitives.jsx":"e8db81ca8db3"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.ArpertureDesignSystem_313833 = window.ArpertureDesignSystem_313833 || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// ui_kits/website/Booking.jsx
try { (() => {
/* Arperture website kit — booking pattern with interactive form + success state */
function Booking({
  open,
  onOpenChange
}) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    brief: ""
  });
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);
  const set = k => e => setForm(f => ({
    ...f,
    [k]: e.target.value
  }));
  const submit = e => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = "Tell us who's calling.";
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) er.email = "Enter a valid email.";
    if (!form.brief.trim()) er.brief = "A line or two about the story.";
    setErrors(er);
    if (Object.keys(er).length === 0) setSent(true);
  };
  return /*#__PURE__*/React.createElement("section", {
    id: "contact",
    style: {
      padding: "var(--sp-9) 0 var(--sp-10)",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pattern"
  }, /*#__PURE__*/React.createElement("div", {
    className: "pattern-inner",
    style: bookStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: bookStyles.left
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: "cyan"
  }, "\u25CF Now booking \xB7 Q3"), /*#__PURE__*/React.createElement("h3", {
    style: bookStyles.h3
  }, "Your story,", /*#__PURE__*/React.createElement("br", null), "at 24 frames a second."), /*#__PURE__*/React.createElement("p", {
    style: bookStyles.p
  }, "Tell us about the project. We'll send a short loom back within two business days with a treatment direction and a quote."), /*#__PURE__*/React.createElement("div", {
    className: "btn-row",
    style: {
      marginTop: "var(--sp-5)"
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "badge badge-coral"
  }, "Arcola, VA"), /*#__PURE__*/React.createElement("span", {
    className: "badge badge-cyan"
  }, "hello@arperture.io"))), /*#__PURE__*/React.createElement("div", {
    style: bookStyles.right
  }, sent ? /*#__PURE__*/React.createElement("div", {
    style: bookStyles.success
  }, /*#__PURE__*/React.createElement(Alert, {
    variant: "success",
    lead: "Brief received."
  }, "Thanks, ", form.name.split(" ")[0] || "there", " \u2014 we'll be in touch within two business days. Check your inbox for a confirmation."), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => {
      setSent(false);
      setForm({
        name: "",
        email: "",
        brief: ""
      });
    }
  }, "Send another brief")) : /*#__PURE__*/React.createElement("form", {
    onSubmit: submit,
    style: bookStyles.form,
    noValidate: true
  }, /*#__PURE__*/React.createElement(Field, {
    label: "Your name",
    placeholder: "Andrew Dallons",
    value: form.name,
    onChange: set("name"),
    error: errors.name
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Project email",
    type: "email",
    placeholder: "hello@arperture.io",
    value: form.email,
    onChange: set("email"),
    error: errors.email
  }), /*#__PURE__*/React.createElement(Field, {
    label: "Brief",
    textarea: true,
    rows: 3,
    placeholder: "Tell us about the story\u2026",
    value: form.brief,
    onChange: set("brief"),
    error: errors.brief
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "coral",
    size: "lg",
    type: "submit"
  }, "Book a discovery call")))))));
}
const bookStyles = {
  inner: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: "var(--sp-8)",
    alignItems: "center"
  },
  left: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--sp-4)",
    alignItems: "flex-start"
  },
  h3: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "var(--text-4xl)",
    letterSpacing: "-.03em",
    lineHeight: 1,
    margin: "var(--sp-2) 0 0"
  },
  p: {
    color: "var(--text-muted)",
    maxWidth: "42ch"
  },
  right: {
    background: "rgba(14,14,15,.4)",
    border: "1px solid var(--border)",
    borderRadius: "var(--r-lg)",
    padding: "var(--sp-6)",
    backdropFilter: "blur(4px)"
  },
  form: {
    display: "flex",
    flexDirection: "column"
  },
  success: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--sp-4)",
    alignItems: "flex-start"
  }
};
Object.assign(window, {
  Booking
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Booking.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Footer.jsx
try { (() => {
/* Arperture website kit — footer */
function Footer({
  onNav
}) {
  const cols = [{
    h: "Studio",
    links: ["Work", "Services", "About", "Careers"]
  }, {
    h: "Connect",
    links: ["hello@arperture.io", "Instagram", "Vimeo", "LinkedIn"]
  }];
  return /*#__PURE__*/React.createElement("footer", {
    style: footStyles.foot
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: footStyles.inner
  }, /*#__PURE__*/React.createElement("div", {
    style: footStyles.brandCol
  }, /*#__PURE__*/React.createElement("button", {
    className: "brand",
    type: "button",
    onClick: () => onNav && onNav("top")
  }, /*#__PURE__*/React.createElement(Mark, {
    variant: "cyan",
    size: 28
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-name",
    style: {
      fontSize: "1.1rem"
    }
  }, "Arperture", /*#__PURE__*/React.createElement("b", null, "."))), /*#__PURE__*/React.createElement("p", {
    style: footStyles.tag
  }, "Media Marketing for Small Businesses."), /*#__PURE__*/React.createElement("p", {
    style: footStyles.meta
  }, "Arcola, Virginia \xB7 arperture.io")), /*#__PURE__*/React.createElement("div", {
    style: footStyles.colsWrap
  }, cols.map(c => /*#__PURE__*/React.createElement("div", {
    key: c.h,
    style: footStyles.col
  }, /*#__PURE__*/React.createElement("p", {
    style: footStyles.colH
  }, c.h), c.links.map(l => /*#__PURE__*/React.createElement("a", {
    key: l,
    style: footStyles.link
  }, l)))))), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: footStyles.base
  }, /*#__PURE__*/React.createElement("p", {
    style: footStyles.copy
  }, "\xA9 2025 Arperture Media \xB7 All frames reserved"), /*#__PURE__*/React.createElement("p", {
    style: footStyles.copy
  }, "Design System \"The Aperture\" \xB7 v2.1")));
}
const footStyles = {
  foot: {
    borderTop: "1px solid var(--border)",
    padding: "var(--sp-8) 0 var(--sp-6)",
    position: "relative",
    zIndex: 2
  },
  inner: {
    display: "flex",
    justifyContent: "space-between",
    gap: "var(--sp-8)",
    flexWrap: "wrap",
    marginBottom: "var(--sp-7)"
  },
  brandCol: {
    maxWidth: "320px",
    display: "flex",
    flexDirection: "column",
    gap: "var(--sp-3)"
  },
  tag: {
    color: "var(--text-muted)",
    fontSize: "var(--text-sm)"
  },
  meta: {
    fontFamily: "var(--font-mono)",
    fontSize: "var(--text-xs)",
    letterSpacing: ".08em",
    color: "var(--text-faint)"
  },
  colsWrap: {
    display: "flex",
    gap: "var(--sp-9)",
    flexWrap: "wrap"
  },
  col: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--sp-3)"
  },
  colH: {
    fontFamily: "var(--font-mono)",
    fontSize: "var(--text-xs)",
    letterSpacing: ".18em",
    textTransform: "uppercase",
    color: "var(--cyan-300)",
    marginBottom: "var(--sp-1)"
  },
  link: {
    color: "var(--text-muted)",
    textDecoration: "none",
    fontSize: "var(--text-sm)",
    cursor: "pointer"
  },
  base: {
    display: "flex",
    justifyContent: "space-between",
    gap: "var(--sp-4)",
    flexWrap: "wrap",
    borderTop: "1px solid var(--border)",
    paddingTop: "var(--sp-5)"
  },
  copy: {
    fontFamily: "var(--font-mono)",
    fontSize: "var(--text-xs)",
    letterSpacing: ".06em",
    color: "var(--text-faint)"
  }
};
Object.assign(window, {
  Footer
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Footer.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Hero.jsx
try { (() => {
/* Arperture website kit — cinematic hero with spinning spectrum mark */
function Hero({
  onBook,
  onReel
}) {
  return /*#__PURE__*/React.createElement("header", {
    className: "hero",
    id: "top",
    style: heroStyles.hero
  }, /*#__PURE__*/React.createElement("div", {
    style: heroStyles.markWrap,
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("img", {
    src: "../../assets/arperture-mark.png",
    alt: "",
    style: heroStyles.spinMark,
    className: "hero-spin"
  })), /*#__PURE__*/React.createElement("div", {
    className: "wrap",
    style: heroStyles.grid
  }, /*#__PURE__*/React.createElement("div", {
    className: "reveal d1"
  }, /*#__PURE__*/React.createElement(Kicker, null, "Brand System \xB7 Now booking \xB7 Q3 \xB7 Arcola, VA")), /*#__PURE__*/React.createElement("h1", {
    className: "reveal d2",
    style: heroStyles.h1
  }, "Cinematic AI,", /*#__PURE__*/React.createElement("br", null), "shot through ", /*#__PURE__*/React.createElement("em", {
    style: heroStyles.em
  }, "the aperture.")), /*#__PURE__*/React.createElement("p", {
    className: "reveal d3",
    style: heroStyles.lead
  }, "From script to screen \u2014 film-grade AI video, sound design, and branded stories for brands, artists & storytellers."), /*#__PURE__*/React.createElement("div", {
    className: "btn-row reveal d4",
    style: {
      marginTop: "var(--sp-7)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "coral",
    size: "lg",
    onClick: onBook
  }, "Book a discovery call"), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    size: "lg",
    onClick: onReel
  }, "Watch the reel \u2192")), /*#__PURE__*/React.createElement("div", {
    className: "reveal d4 meta",
    style: heroStyles.meta
  }, /*#__PURE__*/React.createElement("span", {
    style: heroStyles.metaItem
  }, "Retro-futurist"), /*#__PURE__*/React.createElement("span", {
    style: heroStyles.metaItem
  }, "Cinematic dark"), /*#__PURE__*/React.createElement("span", {
    style: heroStyles.metaItem
  }, "Veo 3.1 \xB7 Sound \xB7 Edit"))));
}
const heroStyles = {
  hero: {
    position: "relative",
    padding: "var(--sp-10) 0 var(--sp-9)",
    overflow: "hidden"
  },
  markWrap: {
    position: "absolute",
    right: "-110px",
    top: "50%",
    transform: "translateY(-50%)",
    width: "560px",
    height: "560px",
    opacity: 0.3,
    zIndex: 0,
    pointerEvents: "none"
  },
  spinMark: {
    width: "100%",
    height: "100%",
    animation: "heroSpin 80s linear infinite"
  },
  grid: {
    position: "relative",
    zIndex: 2,
    maxWidth: "760px"
  },
  h1: {
    margin: "var(--sp-5) 0",
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "var(--text-6xl)",
    lineHeight: 0.94,
    letterSpacing: "-.035em"
  },
  em: {
    fontStyle: "normal",
    background: "var(--grad-signal)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent"
  },
  lead: {
    fontSize: "var(--text-xl)",
    color: "var(--text-muted)",
    maxWidth: "52ch"
  },
  meta: {
    display: "flex",
    gap: "var(--sp-5)",
    marginTop: "var(--sp-7)",
    flexWrap: "wrap",
    fontFamily: "var(--font-mono)",
    fontSize: "var(--text-xs)",
    letterSpacing: ".18em",
    textTransform: "uppercase",
    color: "var(--text-faint)"
  },
  metaItem: {
    display: "flex",
    alignItems: "center",
    gap: "var(--sp-2)"
  }
};
Object.assign(window, {
  Hero
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Hero.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Nav.jsx
try { (() => {
/* Arperture website kit — sticky translucent nav */
function Nav({
  onBook,
  onNav
}) {
  const links = ["Work", "Services", "Studio", "Contact"];
  return /*#__PURE__*/React.createElement("nav", {
    className: "nav"
  }, /*#__PURE__*/React.createElement("div", {
    className: "nav-inner"
  }, /*#__PURE__*/React.createElement("button", {
    className: "brand",
    type: "button",
    onClick: () => onNav && onNav("top")
  }, /*#__PURE__*/React.createElement(Mark, {
    variant: "cyan",
    size: 34
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-name"
  }, "Arperture", /*#__PURE__*/React.createElement("b", null, "."))), /*#__PURE__*/React.createElement("ul", {
    className: "nav-links"
  }, links.map(l => /*#__PURE__*/React.createElement("li", {
    key: l
  }, /*#__PURE__*/React.createElement("a", {
    onClick: () => onNav && onNav(l.toLowerCase())
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "nav-right"
  }, /*#__PURE__*/React.createElement("a", {
    className: "nav-links",
    style: {
      display: "flex"
    },
    onClick: () => onNav && onNav("work")
  }), /*#__PURE__*/React.createElement(Button, {
    variant: "coral",
    size: "sm",
    onClick: onBook
  }, "Book a call"))));
}
Object.assign(window, {
  Nav
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Nav.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Services.jsx
try { (() => {
/* Arperture website kit — services section */
const SERVICES = [{
  badge: "cyan",
  tag: "Generate",
  title: "AI Film & Video",
  body: "Script-to-screen narrative video generated with the latest models, directed shot by shot and graded for a single cinematic mood.",
  items: ["Music videos", "Branded & DTC spots", "Episodic shorts"]
}, {
  badge: "coral",
  tag: "Compose",
  title: "Sound & Score",
  body: "Original score, sound design, and mix — the half of cinema that sells the picture. Tempo-mapped to the cut.",
  items: ["Original score", "Sound design", "Final mix & master"]
}, {
  badge: "purple",
  tag: "Direct",
  title: "Creative Direction",
  body: "Concept, prompt grammar, and look development so a project reads as one coherent film, not a reel of clips.",
  items: ["Concepting", "Look dev & grade", "Character consistency"]
}];
function Services() {
  return /*#__PURE__*/React.createElement("section", {
    id: "services",
    style: {
      padding: "var(--sp-9) 0",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Kicker, null, "02 \u2014 Services"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      margin: "var(--sp-4) 0 var(--sp-3)"
    }
  }, "A studio, not a prompt box"), /*#__PURE__*/React.createElement("p", {
    className: "section-sub",
    style: {
      marginBottom: "var(--sp-7)"
    }
  }, "Generation is one tool on the bench. The work is direction, sound, and taste \u2014 applied frame by frame."), /*#__PURE__*/React.createElement("div", {
    style: svcStyles.grid
  }, SERVICES.map(s => /*#__PURE__*/React.createElement("div", {
    className: "panel",
    key: s.title,
    style: svcStyles.card
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: s.badge
  }, s.tag), /*#__PURE__*/React.createElement("span", {
    style: svcStyles.num
  }, "0", SERVICES.indexOf(s) + 1)), /*#__PURE__*/React.createElement("h3", {
    style: svcStyles.title
  }, s.title), /*#__PURE__*/React.createElement("p", {
    style: svcStyles.body
  }, s.body), /*#__PURE__*/React.createElement("ul", {
    style: svcStyles.list
  }, s.items.map(it => /*#__PURE__*/React.createElement("li", {
    key: it,
    style: svcStyles.li
  }, /*#__PURE__*/React.createElement("span", {
    style: svcStyles.dot
  }), it))))))));
}
const svcStyles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "var(--sp-4)"
  },
  card: {
    display: "flex",
    flexDirection: "column",
    gap: "var(--sp-3)"
  },
  num: {
    fontFamily: "var(--font-mono)",
    fontSize: "var(--text-xs)",
    color: "var(--text-faint)",
    letterSpacing: ".1em"
  },
  title: {
    fontFamily: "var(--font-display)",
    fontWeight: 600,
    fontSize: "var(--text-xl)",
    marginTop: "var(--sp-2)"
  },
  body: {
    color: "var(--text-muted)",
    fontSize: "var(--text-sm)"
  },
  list: {
    listStyle: "none",
    marginTop: "auto",
    paddingTop: "var(--sp-3)",
    display: "flex",
    flexDirection: "column",
    gap: "var(--sp-2)"
  },
  li: {
    display: "flex",
    alignItems: "center",
    gap: "var(--sp-3)",
    fontFamily: "var(--font-mono)",
    fontSize: "var(--text-xs)",
    letterSpacing: ".06em",
    textTransform: "uppercase",
    color: "var(--ink-200)"
  },
  dot: {
    width: "5px",
    height: "5px",
    borderRadius: "50%",
    background: "var(--cyan-400)",
    flexShrink: 0
  }
};
Object.assign(window, {
  Services
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Services.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
/* Arperture website kit — work grid + case-study modal */
const WORK = [{
  id: "late-fee",
  title: "Late Fee",
  category: "Music Video",
  badge: "cyan",
  grad: "var(--grad-spectrum)",
  client: "The Delta Pines",
  year: "2025",
  blurb: "46-shot road narrative generated in Veo 3.1, cut to a single take feel.",
  detail: "A nocturnal highway story for indie band The Delta Pines. Every shot was generated and graded to hold one continuous mood — headlights, motel neon, and the long dark between towns — then scored to the track's tempo map.",
  stats: [["46", "Shots"], ["3", "Days, script→cut"], ["2K", "Master"]]
}, {
  id: "ten-hours",
  title: "10 Extra Hours",
  category: "Branded",
  badge: "coral",
  grad: "var(--grad-dusk)",
  client: "Northbound DTC",
  year: "2025",
  blurb: "DTC spot with a consistent character across an 8-shot sitcom cut.",
  detail: "A direct-to-consumer spot built like a mini sitcom. The challenge was character consistency across eight shots and two locations — solved with locked reference frames and a tuned prompt grammar so the lead reads as the same person every time.",
  stats: [["8", "Shots"], ["1", "Hero character"], ["00:30", "Runtime"]]
}, {
  id: "day-with-death",
  title: "A Day with Death",
  category: "Series",
  badge: "purple",
  grad: "var(--grad-signal)",
  client: "Original",
  year: "2024",
  blurb: "Surreal episodic short — the Reaper running errands in suburbia.",
  detail: "An original episodic concept: Death, in a hoodie, doing mundane suburban chores. Deadpan framing, warm grade, and a restrained sound design sell the absurdity without a single line of dialogue.",
  stats: [["4", "Episodes"], ["12", "Locations"], ["B&W→Warm", "Grade"]]
}, {
  id: "signal-loss",
  title: "Signal Loss",
  category: "Music Video",
  badge: "cyan",
  grad: "var(--grad-dusk)",
  client: "KAIRO",
  year: "2025",
  blurb: "Glitch-driven performance piece, fully generated crowd and stage.",
  detail: "A performance video where the venue, crowd, and lighting rig are all generated. Intentional signal-loss artifacts are used as transitions, syncing dropouts to the track's hits.",
  stats: [["31", "Shots"], ["1", "Generated venue"], ["2.5K", "Master"]]
}, {
  id: "the-commute",
  title: "The Commute",
  category: "Branded",
  badge: "coral",
  grad: "var(--grad-spectrum)",
  client: "Meridian Rail",
  year: "2024",
  blurb: "Quiet, cinematic transit brand film — dawn to dusk in one ride.",
  detail: "A calm brand film for a rail operator, compressing a full day into a single ride. Soft natural light, slow push-ins, and a score that breathes — proof the system can do restraint, not just spectacle.",
  stats: [["18", "Shots"], ["1", "Continuous ride"], ["00:60", "Runtime"]]
}, {
  id: "reaper-faq",
  title: "Reaper FAQ",
  category: "Series",
  badge: "purple",
  grad: "var(--grad-signal)",
  client: "Original",
  year: "2025",
  blurb: "Spin-off shorts — Death answers viewer questions, deadpan.",
  detail: "A short-form spin-off from A Day with Death. Each clip is a single locked shot of the Reaper answering a viewer question, leaning on timing and sound rather than motion.",
  stats: [["9", "Shorts"], ["1", "Shot each"], ["Vertical", "Format"]]
}];
function PlayGlyph() {
  return /*#__PURE__*/React.createElement("svg", {
    width: "14",
    height: "14",
    viewBox: "0 0 24 24",
    fill: "currentColor",
    "aria-hidden": "true"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M8 5v14l11-7z"
  }));
}
function WorkCard({
  item,
  onOpen
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "card",
    onClick: () => onOpen(item)
  }, /*#__PURE__*/React.createElement("div", {
    className: "thumb",
    style: {
      background: item.grad
    }
  }, /*#__PURE__*/React.createElement("span", {
    className: "play"
  }, /*#__PURE__*/React.createElement(PlayGlyph, null))), /*#__PURE__*/React.createElement("div", {
    className: "cbody"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: item.badge
  }, item.category), /*#__PURE__*/React.createElement("h4", null, item.title), /*#__PURE__*/React.createElement("p", null, item.blurb), /*#__PURE__*/React.createElement("span", {
    className: "meta"
  }, item.client, " \xB7 ", item.year)));
}
function WorkGrid({
  onOpen
}) {
  return /*#__PURE__*/React.createElement("section", {
    id: "work",
    style: {
      padding: "var(--sp-9) 0",
      borderTop: "1px solid var(--border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "wrap"
  }, /*#__PURE__*/React.createElement(Kicker, null, "01 \u2014 Selected work"), /*#__PURE__*/React.createElement("h2", {
    className: "section-title",
    style: {
      margin: "var(--sp-4) 0 var(--sp-3)"
    }
  }, "Frames we've shot through the aperture"), /*#__PURE__*/React.createElement("p", {
    className: "section-sub",
    style: {
      marginBottom: "var(--sp-7)"
    }
  }, "Music videos, branded spots, and original series \u2014 generated, directed, scored, and delivered as masters. Open any frame for the breakdown."), /*#__PURE__*/React.createElement("div", {
    style: workStyles.grid
  }, WORK.map(w => /*#__PURE__*/React.createElement(WorkCard, {
    key: w.id,
    item: w,
    onOpen: onOpen
  })))));
}
function CaseStudyModal({
  item,
  onClose,
  onBook
}) {
  useEffect(() => {
    const h = e => e.key === "Escape" && onClose();
    window.addEventListener("keydown", h);
    return () => window.removeEventListener("keydown", h);
  }, [onClose]);
  if (!item) return null;
  return /*#__PURE__*/React.createElement("div", {
    className: "scrim",
    onClick: onClose
  }, /*#__PURE__*/React.createElement("div", {
    className: "modal",
    onClick: e => e.stopPropagation()
  }, /*#__PURE__*/React.createElement("button", {
    className: "closex",
    onClick: onClose,
    "aria-label": "Close"
  }, "\u2715"), /*#__PURE__*/React.createElement("div", {
    className: "mhead",
    style: {
      background: item.grad
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "hrow"
  }, /*#__PURE__*/React.createElement(Badge, {
    variant: item.badge
  }, item.category), /*#__PURE__*/React.createElement(Badge, {
    variant: "cyan"
  }, "\u25CF Veo 3.1"))), /*#__PURE__*/React.createElement("div", {
    className: "mbody"
  }, /*#__PURE__*/React.createElement("h3", null, item.title), /*#__PURE__*/React.createElement("p", {
    style: {
      fontFamily: "var(--font-mono)",
      fontSize: "var(--text-xs)",
      letterSpacing: ".1em",
      textTransform: "uppercase",
      color: "var(--text-faint)",
      marginBottom: "var(--sp-4)"
    }
  }, item.client, " \xB7 ", item.year), /*#__PURE__*/React.createElement("p", null, item.detail), /*#__PURE__*/React.createElement("div", {
    className: "stat-row"
  }, item.stats.map(([n, l]) => /*#__PURE__*/React.createElement("div", {
    className: "stat",
    key: l
  }, /*#__PURE__*/React.createElement("div", {
    className: "n"
  }, n), /*#__PURE__*/React.createElement("div", {
    className: "l"
  }, l)))), /*#__PURE__*/React.createElement("div", {
    className: "btn-row",
    style: {
      marginTop: "var(--sp-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    variant: "primary",
    onClick: onClose
  }, "\u25B6 Play reel"), /*#__PURE__*/React.createElement(Button, {
    variant: "coral",
    onClick: () => {
      onClose();
      onBook();
    }
  }, "Start a project like this")))));
}
const workStyles = {
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
    gap: "var(--sp-4)"
  }
};
Object.assign(window, {
  WorkGrid,
  CaseStudyModal,
  WORK
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/app.jsx
try { (() => {
/* Arperture website kit — app shell, ties components into an interactive site */
function App() {
  const [active, setActive] = useState(null); // case-study modal

  // Opt into entrance animation only when the page is actually visible,
  // so throttled/hidden iframes never freeze content at opacity:0.
  useEffect(() => {
    if (document.visibilityState === "visible") {
      requestAnimationFrame(() => document.body.classList.add("reveal-anim"));
    }
  }, []);
  const scrollTo = id => {
    const el = document.getElementById(id === "top" ? "top" : id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.scrollY - 70;
      window.scrollTo({
        top: Math.max(0, y),
        behavior: "smooth"
      });
    }
  };
  const book = () => scrollTo("contact");
  const reel = () => scrollTo("work");
  return /*#__PURE__*/React.createElement("div", {
    className: "grain bloom"
  }, /*#__PURE__*/React.createElement(Nav, {
    onBook: book,
    onNav: scrollTo
  }), /*#__PURE__*/React.createElement(Hero, {
    onBook: book,
    onReel: reel
  }), /*#__PURE__*/React.createElement(WorkGrid, {
    onOpen: setActive
  }), /*#__PURE__*/React.createElement(Services, null), /*#__PURE__*/React.createElement(Booking, null), /*#__PURE__*/React.createElement(Footer, {
    onNav: scrollTo
  }), /*#__PURE__*/React.createElement(CaseStudyModal, {
    item: active,
    onClose: () => setActive(null),
    onBook: book
  }));
}
ReactDOM.createRoot(document.getElementById("root")).render(/*#__PURE__*/React.createElement(App, null));
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/app.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/primitives.jsx
try { (() => {
/* Arperture website kit — shared primitives */
const {
  useState,
  useRef,
  useEffect
} = React;

/* The official Arperture shutter mark (polished raster: teal blades, black
   outlines, white custom "A"). One canonical asset; the `variant` prop is
   accepted for back-compat but the mark is a single fixed lockup. */
function Mark({
  variant,
  size = 34,
  className = "",
  style = {}
}) {
  return /*#__PURE__*/React.createElement("img", {
    src: "../../assets/arperture-mark.png",
    alt: "Arperture",
    width: size,
    height: size,
    className: className,
    style: {
      display: "block",
      objectFit: "contain",
      ...style
    }
  });
}
function Wordmark({
  size = 1.25,
  variant = "cyan"
}) {
  return /*#__PURE__*/React.createElement("button", {
    className: "brand",
    type: "button"
  }, /*#__PURE__*/React.createElement(Mark, {
    variant: variant,
    size: size * 27
  }), /*#__PURE__*/React.createElement("span", {
    className: "brand-name",
    style: {
      fontSize: size + "rem"
    }
  }, "Arperture", /*#__PURE__*/React.createElement("b", null, ".")));
}
function Kicker({
  children,
  line = true
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "kicker" + (line ? " line" : "")
  }, children);
}
function Button({
  variant = "primary",
  size,
  children,
  onClick,
  disabled,
  type = "button",
  style
}) {
  const cls = ["btn", "btn-" + variant, size ? "btn-" + size : ""].join(" ").trim();
  return /*#__PURE__*/React.createElement("button", {
    className: cls,
    onClick: onClick,
    disabled: disabled,
    type: type,
    style: style
  }, children);
}
function Badge({
  variant = "cyan",
  children
}) {
  return /*#__PURE__*/React.createElement("span", {
    className: "badge badge-" + variant
  }, children);
}
function Field({
  label,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  textarea,
  rows = 4
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "field" + (error ? " error" : "")
  }, /*#__PURE__*/React.createElement("label", null, label), textarea ? /*#__PURE__*/React.createElement("textarea", {
    rows: rows,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }) : /*#__PURE__*/React.createElement("input", {
    type: type,
    placeholder: placeholder,
    value: value,
    onChange: onChange
  }), error && /*#__PURE__*/React.createElement("div", {
    className: "hint"
  }, error));
}
function Alert({
  variant = "info",
  lead,
  children
}) {
  return /*#__PURE__*/React.createElement("div", {
    className: "alert alert-" + variant
  }, /*#__PURE__*/React.createElement("span", {
    className: "dot"
  }), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("strong", null, lead), " ", children));
}
Object.assign(window, {
  Mark,
  Wordmark,
  Kicker,
  Button,
  Badge,
  Field,
  Alert
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/primitives.jsx", error: String((e && e.message) || e) }); }

})();
