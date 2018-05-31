import React from 'react';
import ReactDOM from 'react-dom';
import { Link, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css';
import SongsList from './components/SongsList';

function Song(source, title, description, id, deadStar, bio, pic) {
  this.source = source;
  this.title = title;
  this.description = description;
  this.id = id;
  this.deadStar = deadStar;
  this.bio = bio;
}

const songs = [{
  file: 'Cobain.mp3',
  title: 'Smells Like Teen Spirit',
  id: 0,
  artist: "Nirvana",
  deadStar: "Kurt Cobain",
  bio: "On April 8, 1994, Kurt Cobain, the lead singer of the grunge band Nirvana, was found dead at his home, located at 171 Lake Washington Boulevard East in Seattle, Washington, USA. Forensic analysis at the time determined he had killed himself on April 5. The Seattle Police Department incident report states: Kurt Cobain was found with a shotgun across his body, had a visible head wound and there was a suicide note discovered nearby. The King County Medical Examiner noted puncture wounds on the inside of both the right and left elbow. Prior to his death, Cobain had checked out of a drug rehabilitation facility and had been reported as suicidal by his wife Courtney Love. Despite the official ruling of suicide, it has been suggested that Cobain did not actually kill himself. Tom Grant, a private investigator hired by Love to find Cobain after his departure from drug rehabilitation, believes that Cobain was murdered as the result of a conspiracy."
},
{
  file: 'Henrix.mp3',
  title: 'All Along the Watchtower',
  id: 1,
  artist: "Jimi Hendrix",
  deadStar: "Jimi Hendrix",
  bio: "he also died."
},
{
  file: 'Morrison.mp3',
  title: 'Riders on the Storm',
  id: 2,
  artist: "the Doors",
  deadStar: "Jim Morrison",
  bio: "Morrison joined Pamela Courson in Paris in March 1971, at an apartment he had rented on the rue Beautreillis (in the 4th arrondissement of Paris on the Right Bank). In letters, he described going for long walks through the city, alone. During this time, he shaved his beard and lost some of the weight he had gained in the previous months.[84] He died on July 3, 1971, at age 27. He was found by Courson in a bathtub at his apartment. The official cause of death was listed as heart failure, although no autopsy was performed, as it was not required by French law. His death was two years to the day after the death of Rolling Stones guitarist Brian Jones, and approximately nine months after the deaths of Jimi Hendrix and Janis Joplin."
},
{
  file: 'Joplin.mp3',
  title: 'Piece of My Heart',
  id: 3,
  artist: "Janis Joplin",
  deadStar: "Janis Joplin",
  bio: "On Sunday afternoon, October 4, 1970, producer Paul Rothchild became concerned when Joplin failed to show up at Sunset Sound Recorders for a recording session in which she was scheduled to provide the vocal track for the already-existing instrumental track of the song Buried Alive in the Blues. In the evening, Full Tilt Boogie's road manager, John Cooke, drove to the Landmark Motor Hotel in Hollywood where Joplin was staying. He saw Joplin's psychedelically painted Porsche 356 C Cabriolet in the parking lot, and upon entering Joplin's room, he found her dead on the floor beside her bed. The official cause of death was a heroin overdose, possibly compounded by alcohol. Cooke believes Joplin had been given heroin that was much more potent than normal, as several of her dealer's other customers also overdosed that week."
},
{
  file: 'Jones.mp3',
  title: '(I Cant Get No) Satisfaction',
  id: 4,
  artist: "the Rolling Stones",
  deadStar: "Brian Jones",
  bio: "At around midnight on the night of 2–3 July 1969, Jones was discovered motionless at the bottom of his swimming pool at Cotchford Farm. His Swedish girlfriend, Anna Wohlin, was convinced Jones was alive when he was taken out of the pool, insisting he still had a pulse. However, by the time the doctors arrived it was too late and he was pronounced dead. The coroner's report stated death by misadventure and noted his liver and heart were heavily enlarged by drug and alcohol abuse.",
},

{
  file: 'Winehouse.mp3',
  title: 'Back to Black',
  id: 5,
  artist: "Amy Winehouse",
  deadStar: "Amy Winehouse",
  bio: "At 3:54 p.m. BST on 23 July 2011, two ambulances were called to Winehouse's home in Camden, London. Winehouse was pronounced dead at the scene. Shortly afterwards, the Metropolitan Police confirmed that she had died. After her death was announced, media and camera crews appeared, as crowds gathered near Winehouse's residence to pay their respects. Forensic investigators entered the flat as police cordoned off the street outside; they recovered one small and two large bottles of vodka from her room. After her death, the singer broke her second Guinness World Record: for the most songs by a woman to simultaneously appear on the UK singles chart, with eight. A coroner's inquest reached a verdict of misadventure. The report released on 26 October 2011 explained that Winehouse's blood alcohol content was 416 mg per 100 ml (0.416%) at the time of her death, more than five times the legal drink-drive limit. According to the coroner, The unintended consequences of such potentially fatal levels was her sudden death."
}]


ReactDOM.render((
  <Router>
    <Switch>
      <App songs={songs} />
    </Switch>
  </Router>
), document.getElementById('root'));

