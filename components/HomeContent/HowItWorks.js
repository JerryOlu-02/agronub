import IconOne from '@/assets/icon-one.svg';
import IconTwo from '@/assets/icon-two.svg';
import IconThree from '@/assets/icon-three.svg';

export default function HowItWorks() {
  return (
    <section>
      <aside>
        <h2>
          How does <span>AgroNub</span> works?
        </h2>

        <p>
          Quam commodo proin pharetra nunc suspendisse eget enim at. At gravida
          fermentum sit a egestas enim malesuada varius. Gravida facilisi at
          suscipit quam leo neque. Ullamcorper arcu condimentum dictum risus
          feugiat non vitae elementum.
        </p>

        <div>
          <div>
            <span>
              <IconOne />
            </span>
            <span>
              <IconTwo />
            </span>
            <span>
              <IconThree />
            </span>
          </div>
        </div>
      </aside>

      <aside></aside>
    </section>
  );
}
