import React from 'react';
import styles from './styles.module.css';

/**
 * Two-column "use case" walkthrough: a simulated AI Assistant conversation on
 * the left (the compound <Walkthrough.Message> / <Walkthrough.Choices> /
 * <Walkthrough.FieldTable> / <Walkthrough.Actions> pieces), context cards on
 * the right (<Walkthrough.CapabilityCard> and friends), passed as `sidebar`.
 *
 * Icons are the ones already mapped in src/data/icons.js for the matching
 * product area (e.g. `fal fa-sparkles` for /ai) — no new symbols.
 */
function Walkthrough({ subtitle, sidebar, children }) {
  return (
    <div className={styles.walkthroughContainer}>
      <div className={styles.walkthrough}>
        <div className={styles.main}>
          {subtitle && <p className={styles.subtitle}>{subtitle}</p>}
          <div className={styles.chatPanel}>
            <div className={styles.chatHeader}>
              <span className={styles.chatHeaderIcon} aria-hidden="true">
                <i className="fal fa-sparkles" />
              </span>
              <span className={styles.chatHeaderLabel}>AI Assistant Chat</span>
            </div>
            <div className={styles.conversation}>{children}</div>
            <div className={styles.chatFooter} aria-hidden="true">
              <div className={styles.chatInputBox}>Ask anything…</div>
              <div className={styles.chatFooterRow}>
                <div className={styles.chatFooterIcons}>
                  <span className={styles.chatFooterIcon}><i className="fal fa-paperclip" /></span>
                  <span className={styles.chatFooterIcon}><i className="fal fa-sliders-h" /></span>
                </div>
                <div className={styles.chatFooterIcons}>
                  <span className={styles.chatFooterMicLang}>
                    <i className="fal fa-microphone" />
                    <span className={styles.chatFooterDivider} />
                    <span>EN</span>
                  </span>
                  <span className={styles.chatFooterSend}><i className="fal fa-arrow-up" /></span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.sidebar}>{sidebar}</div>
      </div>
    </div>
  );
}

function Message({ sender, name, time, children }) {
  const isAssistant = sender === 'assistant';
  return (
    <div className={styles.bubbleRow}>
      <div
        className={[styles.avatar, isAssistant ? styles.avatarAssistant : styles.avatarYou].join(' ')}
        aria-hidden="true"
      >
        {isAssistant ? (
          <i className="fal fa-sparkles" />
        ) : (
          <img className={styles.avatarImage} src="/img/ai/avatars/person.png" alt="" loading="lazy" />
        )}
      </div>
      <div className={[styles.bubble, isAssistant ? styles.bubbleAssistant : styles.bubbleYou].join(' ')}>
        <div className={styles.bubbleHead}>
          <span className={styles.bubbleSender}>{name}</span>
          {time && <span className={styles.bubbleTime}>{time}</span>}
        </div>
        {children}
      </div>
    </div>
  );
}

function FieldTable({ rows }) {
  return (
    <table className={styles.fieldTable}>
      <tbody>
        {rows.map(([label, value]) => (
          <tr key={label}>
            <th>{label}</th>
            <td>{value}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

function Choices({ label, options }) {
  return (
    <div className={styles.choiceGroup}>
      {label && <span className={styles.choiceLabel}>{label}</span>}
      <div className={styles.choiceList}>
        {options.map((option) => (
          <span key={option} className={styles.choicePill}>
            {option}
          </span>
        ))}
      </div>
    </div>
  );
}

function Actions({ items }) {
  return (
    <div className={styles.actions}>
      {items.map(({ label, primary }) => (
        <span
          key={label}
          className={[styles.actionButton, primary ? styles.actionButtonPrimary : ''].join(' ')}
        >
          {label}
        </span>
      ))}
    </div>
  );
}

function Attachment({ src, filename, caption, description }) {
  return (
    <figure className={styles.attachment}>
      <img src={src} alt="img-box-shadow-sm" aria-label={description} loading="lazy" />
      <figcaption>{caption}</figcaption>
      <span className={styles.attachmentFilename}>{filename}</span>
    </figure>
  );
}

function CreatedJobCard({ title, number, rows, actions, label }) {
  return (
    <section className={styles.createdJobCard} aria-label={label}>
      <div className={styles.createdJobHeader}>
        <span className={styles.createdJobIcon} aria-hidden="true"><i className="fal fa-file-alt" /></span>
        <strong>{title}</strong>
        <span className={styles.createdJobNumber}>#{number}</span>
      </div>
      <dl className={styles.createdJobDetails}>
        {rows.map(([name, value]) => (
          <div key={name} className={styles.createdJobRow}>
            <dt>{name}</dt>
            <dd>{value}</dd>
          </div>
        ))}
      </dl>
      <div className={styles.createdJobActions}>
        {actions.map((action) => <span key={action}>{action}</span>)}
      </div>
    </section>
  );
}

function JobList({ title, rows, footer, previewLabel = 'Preview', openLabel = 'Open' }) {
  return (
    <div className={styles.jobListWrap}>
      <section className={styles.jobList} aria-label={title}>
        <div className={styles.jobListHeader}>
          <span className={styles.jobListIcon} aria-hidden="true"><i className="fal fa-tasks" /></span>
          <strong>{title}</strong>
          <span className={styles.jobListCount}>{rows.length}</span>
        </div>
        {rows.map(({ title: jobTitle, number, stage, due, tone, facts }) => (
          <div
            key={number || jobTitle}
            className={[styles.jobListRow, facts ? styles.jobListRowOpen : ''].join(' ')}
          >
            <div className={styles.jobListLine}>
              <span className={styles.jobListTitle}>{jobTitle}</span>
              <span className={[styles.jobListDue, tone ? styles[`jobListDue_${tone}`] : ''].join(' ')}>{due}</span>
            </div>
            <div className={styles.jobListMeta}>
              {number && <span className={styles.jobListNumber}>{number}</span>}
              <span className={styles.jobListStage}>{stage}</span>
            </div>
            {facts && (
              <div className={styles.jobListPeek}>
                <div className={styles.jobListPeekActions} aria-hidden="true">
                  <span title={previewLabel}><i className="fal fa-eye" /></span>
                  <span title={openLabel}><i className="fal fa-external-link" /></span>
                </div>
                <dl className={styles.jobListFacts}>
                  {facts.map(([name, value]) => (
                    <React.Fragment key={name}>
                      <dt>{name}</dt>
                      <dd>{value}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              </div>
            )}
          </div>
        ))}
      </section>
      {footer && (
        <div className={styles.jobListFooter} aria-hidden="true">
          <i className="fal fa-database" /> {footer} <i className="fal fa-angle-down" />
        </div>
      )}
    </div>
  );
}

function ApprovalCard({ title, subtitle, rows, actions }) {
  return (
    <section className={styles.approvalCard} aria-label={title}>
      <div className={styles.approvalHeader}>
        <span className={styles.jobListIcon} aria-hidden="true"><i className="fal fa-tasks" /></span>
        <div className={styles.approvalHeading}>
          <strong>{title}</strong>
          {subtitle && <span className={styles.approvalSubtitle}>{subtitle}</span>}
        </div>
      </div>
      <dl className={styles.approvalFacts}>
        {rows.map(([name, value]) => (
          <React.Fragment key={name}>
            <dt>{name}</dt>
            <dd>{value}</dd>
          </React.Fragment>
        ))}
      </dl>
      <div className={styles.approvalActions}>
        {actions.map(({ label, primary }) => (
          <span
            key={label}
            className={[styles.actionButton, primary ? styles.actionButtonPrimary : ''].join(' ')}
          >
            {label}
          </span>
        ))}
      </div>
    </section>
  );
}

function StatusChip({ status, label }) {
  return (
    <div className={styles.statusChip}>
      <span className={styles.statusChipCheck} aria-hidden="true">✓</span>
      <span>{status}</span>
      <span className={styles.statusChipLabel}>{label}</span>
    </div>
  );
}

function BriefComparison({ templateTitle, resultTitle, note, sections }) {
  return (
    <div className={styles.briefComparison}>
      <div className={styles.briefComparisonPanel}>
        <h3>{templateTitle}</h3>
        {note && <p className={styles.briefComparisonNote}>{note}</p>}
        {sections.map(([heading, prompt]) => (
          <div className={styles.briefComparisonSection} key={heading}>
            <strong>{heading}</strong>
            <p>{prompt}</p>
          </div>
        ))}
      </div>
      <div className={[styles.briefComparisonPanel, styles.briefComparisonResult].join(' ')}>
        <h3>{resultTitle}</h3>
        {sections.map(([heading, , value]) => (
          <div className={styles.briefComparisonSection} key={heading}>
            <strong>{heading}</strong>
            <p>{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

function Card({ theme, icon, label, title, children }) {
  return (
    <div className={[styles.card, styles[theme]].join(' ')}>
      <div className={styles.cardHead}>
        <span className={styles.cardIcon} aria-hidden="true">
          <i className={icon} />
        </span>
        <p className={styles.cardLabel}>{label}</p>
      </div>
      {title && <p className={styles.cardTitle}>{title}</p>}
      {children}
    </div>
  );
}

function CapabilityCard({ title, children }) {
  return (
    <Card theme="cardCapability" icon="fal fa-sparkles" label="AI capability" title={title}>
      <p className={styles.cardBody}>{children}</p>
    </Card>
  );
}

function ChecklistCard({ items }) {
  return (
    <Card theme="cardWhatHappens" icon="fal fa-check-circle" label="What happens in Skills Workflow">
      <ul className={styles.cardList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}

function PhrasingCard({ items }) {
  return (
    <Card theme="cardOtherWays" icon="fal fa-comment-alt-lines" label="Other ways to ask">
      <div>
        {items.map((item) => (
          <p key={item} className={styles.quoteBox}>
            “{item}”
          </p>
        ))}
      </div>
    </Card>
  );
}

function NoteCard({ items }) {
  return (
    <Card theme="cardGoodToKnow" icon="fal fa-info-circle" label="Good to know">
      <ul className={styles.cardList}>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </Card>
  );
}

Walkthrough.Message = Message;
Walkthrough.FieldTable = FieldTable;
Walkthrough.Choices = Choices;
Walkthrough.Actions = Actions;
Walkthrough.Attachment = Attachment;
Walkthrough.CreatedJobCard = CreatedJobCard;
Walkthrough.JobList = JobList;
Walkthrough.ApprovalCard = ApprovalCard;
Walkthrough.StatusChip = StatusChip;
Walkthrough.BriefComparison = BriefComparison;
Walkthrough.CapabilityCard = CapabilityCard;
Walkthrough.ChecklistCard = ChecklistCard;
Walkthrough.PhrasingCard = PhrasingCard;
Walkthrough.NoteCard = NoteCard;

export default Walkthrough;
