import React from "react";
import { Link } from "react-router-dom";

import logoImage from "../../assets/images/logo.svg";
import backIcon from "../../assets/images/icons/back.svg";

import "./styles.css";

interface PageHeaderProps {
  title: string;
  description?: string;
  children?: React.ReactNode; // Include children as an optional prop
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, description, children }) => {
  return (
    <header className="page-header">
      <div className="top-bar-container">
        <Link to="/">
          <img src={backIcon} alt="Voltar" />
        </Link>
        <img src={logoImage} alt="Teachy" />
      </div>

      <div className="header-content">
        <strong>{title}</strong>
        {description && <p>{description}</p>}
        {children} {/* Correctly typed to include children now */}
      </div>
    </header>
  );
};

export default PageHeader
