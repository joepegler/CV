import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Section from './shared/section';

export default class Experience extends Component {
  renderListItem(item, i) {
    return (
      <div className="item" key={`exp_item_${i}`}>
        <div className="meta">
          <div className="upper-row">
            <h3 className="job-title">{item.title}</h3>
            <div className="time">{item.date}</div>
          </div>
          {this.renderCompanySection(item.company, item.companyLink, item.companyShortDetail)}
        </div>
        <div className="details">
          <ul className="achievements-list">
            {item.achievements.map((achievement, idx) => {
              return (<li key={`achievement_idx_${idx}`}>{achievement}</li>)
            })}
          </ul>
          <b>Key Achievement - </b> <span>{item.keyAchievement}</span>
        </div>
      </div>
    );
  }
  renderCompanySection(company, companyLink, companyShortDetail) {
    if (company && companyLink) {
      return (<div className="company"> <a href={companyLink} target="_blank">{company}</a> {companyShortDetail || ''}</div>);
    }
    return null;
  }
  render() {
    const { icon, sectionTitle, list } = this.props;
    return (
      <Section
        className="experiences-section"
        icon={icon || 'briefcase'}
        title={sectionTitle || 'Experience'}
        id="experiences"
      >
        {list.map((item, i) => {
          return this.renderListItem(item, i);
        })}
      </Section>
    );
  }
}

Experience.propTypes = {
  list: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  sectionTitle: PropTypes.string.isRequired,
  icon: PropTypes.string
};

