import { COUPLE_PHOTO, WEDDING } from '../config';
import './Portrait.css';

export default function Portrait() {
  return (
    <section className="portrait">
      <div className="reveal">
        <div className="portrait-arch">
          <div className="portrait-photo">
            <img
              src={import.meta.env.BASE_URL + COUPLE_PHOTO}
              alt={`${WEDDING.brideShort} & ${WEDDING.groomShort}`}
            />
          </div>
        </div>
        <div className="portrait-caption">Two hearts, one journey</div>
      </div>
    </section>
  );
}
