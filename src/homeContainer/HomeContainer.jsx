import React from 'react';
import './HomeContainer.css';

const HomeContainer = () => {
  return (
    <div>
      <h1 className='welcome'>Welcome to my fan site !</h1>

      <section className='game-overwiew'>
        <div className='img-content'>
          <img
            className='rath-vs-hunt'
            src='http://monsterhunterworld.com/images/top/img_intro01.jpg'
            alt='Rathalos vs hunter'
          />
        </div>

        <article className='overwiew-container'>
          <h2 className='overwiew-title'>Game Overwiew</h2>
          <p className='overwiew-content'>
            Battle gigantic monsters in epic locales.
          </p>
          <p className='overwiew-content'>
            As a hunter, you'll take on quests to hunt monsters in a variety of
            habitats.
          </p>
          <p className='overwiew-content'>
            Take down these monsters and receive materials that you can use to
            create stronger weapons and armors in order to hunt even more
            dangerous monsters.
          </p>
          <p className='overwiew-content'>
            In monster Hunter: World, you can enjoy the ultimate hunting
            experience, using everything at your disposal to hunt monsters in a
            nex world teeming with surprise and excitement.
          </p>
        </article>
      </section>
    </div>
  );
};

export default HomeContainer;
