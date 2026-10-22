import {profile, gamingExperience, resumeProjects} from './content.js?v=internship-award-20261022';
const gamingDisclosure = document.querySelector('#gaming');
gamingDisclosure.querySelector('.when-open').textContent = '点击收回';
const collapseGaming = document.createElement('button');
collapseGaming.type = 'button';
collapseGaming.className = 'gaming-collapse';
collapseGaming.textContent = '收回游戏经历 ↑';
collapseGaming.addEventListener('click', () => {
  gamingDisclosure.open = false;
  gamingDisclosure.querySelector('summary').focus({preventScroll: true});
  gamingDisclosure.scrollIntoView({block: 'nearest'});
});
gamingDisclosure.querySelector('.gaming-panel').append(collapseGaming);
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
document.querySelector('#resume-project-list').innerHTML = resumeProjects.map(p=>`<article class="resume-project${p.award?' award-project':''}"><div class="resume-project-meta"><span>${esc(p.category)}</span><time>${esc(p.date)}</time></div>${p.award?`<div class="project-award"><span aria-hidden="true">★</span> 项目获奖 · ${esc(p.award)}</div>`:''}<h3>${esc(p.name)}</h3><p>${esc(p.text)}</p>${p.contribution?`<p class="project-contribution">${esc(p.contribution)}</p>`:''}</article>`).join('');
const link=(url,text,cls='')=>`<a class="${cls}" href="${esc(url)}" target="_blank" rel="noopener noreferrer">${esc(text)} ↗</a>`;
document.querySelector('#experience-summary').innerHTML=profile.experiences.map(e=>`<div class="experience-brief"><div>${esc(e.company)} · ${esc(e.role)} <span class="date">${esc(e.date)}</span></div><p class="experience-intro">${esc(e.summary || e.text)}</p></div>`).join('');
document.querySelector('#project-list').innerHTML=profile.projects.map(p=>`<article class="project-card"><div class="card-top"><span class="category">${esc(p.category)}</span><span class="status">可体验</span></div><h3>${esc(p.name)}</h3>${p.descriptionTitle?`<p class="project-type">${esc(p.descriptionTitle)}</p>`:''}<p class="description">${esc(p.summary)}</p>${p.highlights?`<ul class="project-highlights">${p.highlights.map(t=>`<li>${esc(t)}</li>`).join('')}</ul>`:''}<div class="tags">${p.tags.map(t=>`<span>${esc(t)}</span>`).join('')}</div><div class="project-actions">${link(p.url,p.actionLabel||'在线体验','primary-link')}${link(p.repo,'查看源码','source-link')}</div>${p.note?`<p class="note">${esc(p.note)}</p>`:''}<details><summary>项目说明</summary><div class="detail-content">${p.details.map(([h,t])=>`<h4>${esc(h)}</h4><p>${esc(t)}</p>`).join('')}</div></details></article>`).join('');
document.querySelector('#gaming-list').innerHTML=gamingExperience.map(group=>`<article class="gaming-group"><div class="gaming-group-heading"><h3>${esc(group.title)}</h3><p>${esc(group.subtitle)}</p></div><dl>${group.games.map(([name,experience,duration])=>`<div class="game-entry"><dt><span>${esc(name)}</span>${duration?`<strong class="game-duration">${esc(duration)}</strong>`:''}</dt><dd>${esc(experience)}</dd></div>`).join('')}</dl>${group.focus?`<p class="gaming-focus">${esc(group.focus)}</p>`:''}</article>`).join('');
