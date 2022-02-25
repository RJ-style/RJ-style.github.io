const submitBtn = document.getElementById('submit');
const slide1 = document.getElementById('slide1');
const slide2 = document.getElementById('slide2');
const slide3 = document.getElementById('slide3');
const logo = document.getElementById('HeadBox').querySelector('h1');
const infoBtn = document.getElementById('info-btn');
const birthdayWish = document.getElementById('birthday');

const getUsrName = document.getElementById('Name');
const getUsrDob = document.getElementById('DOB');
const textCont = document.getElementById('para');
const nrmlAud = document.getElementById('aud1');
const spclAud = document.getElementById('aud2');
const bdayName = document.getElementById('bdayPer');
const hloName = document.getElementById('hloName');

logo.addEventListener('click', ()=> {
  if (slide1.className == 'hid' && slide2.className == 'show') {
    slide1.className = 'show';
    slide2.className = 'hid';
    nrmlAud.pause();
    nrmlAud.load();
    spclAud.pause();
    spclAud.load();
  }
  if (slide3.className == 'sliding') {
    slide3.className = 'backing';
    slide1.style = `filter:blur(0px);
    transition:filter 2s;`;
    slide2.style = `filter:blur(0px);
    transition:filter 2s;`;
  }
})
infoBtn.addEventListener('click', ()=> {
  if (slide3.className == '' || slide3.className == 'backing') {
    slide3.className = 'sliding';
    slide1.style = `filter:blur(5px);
    transition:filter 2s;`;
    slide2.style = `filter:blur(5px);
    transition:filter 2s;`;

  } else if (slide3.className == '' || slide3.className == 'sliding') {
    slide3.className = 'backing';
    slide1.style = `filter:blur(0px);
    transition:filter 2s;`;
    slide2.style = `filter:blur(0px);
    transition:filter 2s;`;
  }
  console.log(slide3.className);
})



//calculations

const quote00 = `When you are alone with a fresh mind
Your inner soul speaks to you,You connects to the universe,

Speak to the universe!`;

const quote01 = `Don't be the Saltwater, be the rainwater
`;

const quote02 = `It is the one step that changes your destiny
`;
const quote03 = `The limit which kibosh you from your goal is the limit that you impose on yourself...
So kibosh the limit that kibosh you from your goal and hit the target!!`;

const quote04 = `
Don't wait for anyone to find
you
Rather find yourself!!
`;

const quote05 = `
Don't let your dreams fall!!`;

const quote06 = `
Never compete or
compare
with others
Be the best version of yourself!!`;

const quote07 = `
Make it happen in your own special way!`;
const quote08 = `
Instead of listening to words start listening to eyes
Because eyes can't lie!!`;
const quote09 = `
For every locked door
there is a key
It may be lost
but it is not that you can't open;
Just try to find the key,
If you can't find
then make a newone!!
`;
const quote10 = `
Just a minute
Go to the mirror
You can see the
World's most sweetest person in it
Greet her/him with your smile!!
`;
const quote11 = `
Shine as bright as you can
but your brightness should
not make others to go blind!
`;

const quote12 = `
The descision of the past
is the backbone of future
Make decisions wiser enough to face future
so that you won't regret!!
`;
const quote13 = `
Sweetheart, believe me
you are a blessing;
you are a miracle;
you are here to make possible!!
`;
const quote14 = `

You are the
only person
who makes me feel
all type of
emotions!!
`;
const quote15 = `
Life becomes beautiful if
you learn to stay calm in every situation!!
`;
const quote16 = `
Dear, you should accept and
love the way you are!!!
`;
const quote17 = `
It hurts..
when you expect things to
happen but it never does.
And it happens when you
can't face it.!!!
`;
const quote18 = `
Amidst the chaos the peace i
need lingers around..!
`;
const quote19 = `
Darling,
Your life is just like the
rainbow
more colourful and
bright!!
`;
const quote20 = `
The butterflies that I
cherish has finally reached
the garden in your heart!
`;
const quote21 = `
Whenever i go back in time,
all i can remember is the
days with you!!
`;
const quote22 = `
The pages of my diary
are just filled with the
memories of you!!
`;
const quote23 = `

Be the one who shines without makeup
Let your inner sparkle shine high!!
`;
const quote24 = `
Far but connected!
`;
const quote25 = `
The thing you see is
completely different from
mine eventhough we share
same sky!
`;
const quote26 = `
Young but matured!
`;
const quote27 = `
Even the universe
surrenders before kindness!
`;
const quote28 = `
You don't know that she is
good at concealing her
feelings!
`;
const quote29 = `
Even kindness need bravery
`;
const quote30 = `
Magic do exists
`;
const quote31 = `
Doubt ruins everything
`;
const quote32 = `
Fall but never quit
`;
const quote33 = `
Make your life
simple but
elite..
`;
const quote34 = `
Love is the key
to open the
locked doors of
heart..
`;
const quote35 = `
There is a
beauty in being
yourself..
`;
const quote36 = `
The best reply
to your foe
is your
progress...
`;
const quote37 = `
Uniqueness is being
yourself..
`;
const quote38 = `
Silent changes
will always make a
sound impact...
`;
const quote39 = `
You are my
little external
happiness...
`;
const quote40 = `
Between the
time line all i can
remember is the
days with you..
`;
const quote41 = `
In the
gathering of
thousands
all i can see is
You...
`;
const quote42 = `
Yes! I want to express my
feelings but it's useless
cause the ears which I
want to listen doesn't
give a shit!!
`;
const quote43 = `
Sometimes it's your brain
that suggests you to trust
your heart!

`;
const quote44 = `
Energies are communicable
so always be positive and spread
positivity!!
`;
const quote45 = `
Never judge anyone
too fast
it brings you
a scar
that can never heal!!
`;
const quote46 = `
It's okay to take rest in the
journey of your hardest
trek but never step back!!
`;
const quote47 = `
I know that
the days were
never been the same;
it's tough and
rough on you;
but believe me
there is still the best
waiting for you tomorrow,
a huge win with
a big crown!
`;
const quote48 = `

I fell only once
cause after
that he doesn't
let me fall
`;
const quote49 = `
Whatever the situation it
maybe nothing and no one
can stop you from your
goal if you have a strong
will power!
`;
const quote50 = `
Often longingness is
mistook for jealously!
`;
const quote51 = `
For you it may
be a joke but
for someone it's
emotion..
`;
const quote52 = `

You are my light
in the darkest roads;
You are my shield
in the battle field;
You are my breath
to the empty soul;
And you are my everything!!
`;

let quoteArr = [quote00, quote01, quote02, quote03, quote04, quote05, quote06, quote07, quote08, quote09, quote10, quote11, quote12, quote13, quote14, quote15, quote16, quote17, quote18, quote19, quote20, quote21, quote22, quote23, quote24, quote25, quote26, quote27, quote28, quote29, quote30, quote31, quote32, quote33, quote34, quote35, quote36, quote37, quote38, quote39, quote40, quote41, quote42, quote43, quote44, quote45, quote46, quote47, quote48, quote49, quote50, quote51, quote52];



function looping() {
  let usrNameAscii = [];
  let usrName = getUsrName.value;
  let usrNameArr = [...usrName];
  usrNameArr.forEach((item)=> {
    let i = item.charCodeAt();
    usrNameAscii.push(i);
  });
  usrNameAsciiTot = usrNameAscii.reduce((prev, crnt)=> {
    return prev+crnt;
  })
  let usrEnterdDate = getUsrDob.value;
  // let usrAge = ((new Date()-new Date(getUsrDob.value))/31556900000);
  let quoteArrLegnth = quoteArr.length;
  let usrDobYrAcsiiArr = [];
  let usrDobYr = new Date(getUsrDob.value).getFullYear().toString();
  [...usrDobYr].forEach((h)=> {
    let ascii = h.charCodeAt();
    usrDobYrAcsiiArr.push(ascii);
    //console.log(ascii);
  });
  const usrTotalYrAscii = usrDobYrAcsiiArr.reduce((prev, crnt)=> {
    return prev+crnt;
  })
  let usrAge = (new Date(getUsrDob.value).getDate()+new Date(getUsrDob.value).getMonth()+1+(usrTotalYrAscii/usrDobYrAcsiiArr.length));

  let totalLegnth = ((usrNameAsciiTot/usrNameArr.length)+usrAge).toFixed(0);
  console.log(usrNameArr,
    usrNameAscii.length,
    usrNameAsciiTot,
    'usrTotalYrAscii=',
    usrTotalYrAscii,
    "total",
    usrEnterdDate,
    '=>',
    usrAge,
    'totalLegnth=',
    totalLegnth,
    quoteArrLegnth)
  if (totalLegnth-1 < quoteArr.length) {
    console.log(quoteArr[totalLegnth-1]);

  } else if (totalLegnth-1 >= quoteArr.length) {
    for (let i = 0; i < (totalLegnth- quoteArrLegnth); i++) {
      quoteArr[quoteArr.length] = quoteArr[i];
    }
    console.log(quoteArr, quoteArr[totalLegnth-1], quoteArr.length, 'ascii=', totalLegnth);

  }
  return quoteArr[totalLegnth-1];

}


//submission
submitBtn.addEventListener('click', ()=> {
  if (getUsrName.value !== '' && getUsrDob.value !== "" && (getUsrDob.value !== '0000-00-00')) {

    console.log(new Date(getUsrDob.value).getTime());
    hloName.innerText = getUsrName.value;
    //future warning
    if (new Date(getUsrDob.value) > new Date()) {
      alert(`Oops! You couldn't born in future...`);
      return;
    } else {

      slide1.className = 'hid';
      slide2.className = 'show';

    }
    //birthdayWish
    if (new Date().getDate() == new Date(getUsrDob.value).getDate() && new Date().getMonth() == new Date(getUsrDob.value).getMonth()) {
      bdayName.innerText = getUsrName.value;
      birthdayWish.className = 'show';
      nrmlAud.play();
    } else {
      birthdayWish.className = '';
    }
  } else {
    alert('Oops! You need to Fill these first for further operations!')
  }
textCont.innerText=looping();
  if (((getUsrName.value).toUpperCase()) == 'HEMAVATHY T A' && new Date(getUsrDob.value).getDate() == new Date('2002-02-25').getDate() && new Date(getUsrDob.value).getMonth() == new Date('2002-02-25').getMonth() && new Date(getUsrDob.value).getFullYear() == new Date('2002-02-25').getFullYear()) {
    birthdayWish.className = 'show';
    bdayName.innerText=getUsrName.value;
    textCont.innerText = quoteArr[52];
    spclAud.play();
     nrmlAud.pause();
  } 
})
