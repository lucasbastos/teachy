import React from 'react';
import './styles.css';
import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

interface TeacherItemProps {
  avatar: string;
  name: string;
  subject: string;
  bio: string;
  price: number;
}

const TeacherItem: React.FC<TeacherItemProps> = ({ avatar, name, subject, bio, price }) => {
  return (
    <article className="teacher-item">
      <header>
        <img
          src={avatar}
          alt={`Profile of ${name}`}
        />
        <div>
          <strong>{name}</strong>
          <span>{subject}</span>
        </div>
      </header>
      <p>
        {bio}
      </p>

      <footer>
        <p>
          Price/hour
          <strong>R$ {price.toFixed(2)}</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Contact
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;