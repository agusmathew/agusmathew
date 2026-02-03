"use client";

import { useEffect, useState } from "react";

const facts = [
  "Bananas are berries, but strawberries are not.",
  "Octopuses have three hearts and blue blood.",
  "Honey never spoils; edible honey has been found in ancient tombs.",
  "A day on Venus is longer than a year on Venus.",
  "Wombat poop is cube‑shaped.",
  "The Eiffel Tower can be 15 cm taller in summer due to heat expansion.",
  "There are more stars in the universe than grains of sand on Earth.",
  "Sharks existed before trees.",
  "A group of flamingos is called a flamboyance.",
  "The shortest war in history lasted 38 minutes.",
  "Scotland’s national animal is the unicorn.",
  "Some turtles can breathe through their butts.",
  "The heart of a blue whale is about the size of a small car.",
  "A bolt of lightning contains enough energy to toast 100,000 slices of bread.",
  "There are more possible chess games than atoms in the observable universe.",
  "Rabbits can see behind themselves without moving their heads.",
  "The Great Wall of China is not visible from space with the naked eye.",
  "A teaspoon of neutron star would weigh about a billion tons on Earth.",
  "The inventor of the Pringles can is buried in one.",
  "Cows have best friends and get stressed when separated.",
  "Some metals are so reactive they explode in water.",
  "A group of crows is called a murder.",
  "The oldest “your mom” joke is about 3,500 years old.",
  "The first oranges weren’t orange; they were green.",
  "There are more fake flamingos in the world than real ones.",
  "Sloths can hold their breath longer than dolphins.",
  "The longest English word without a vowel is “rhythms.”",
  "Spiders can’t fly, but some “balloon” on silk to travel.",
  "A day on Mercury lasts 59 Earth days.",
  "Sea otters hold hands while sleeping to keep from drifting apart.",
  "The dot over the letter i is called a tittle.",
  "Koalas sleep up to 22 hours a day.",
  "Humans share about 60% of their DNA with bananas.",
  "The average cloud weighs about a million pounds.",
  "There are more bacteria in your mouth than people on Earth.",
  "Mantis shrimp can punch so fast it boils the water around it.",
  "A group of owls is called a parliament.",
  "The longest place name is 85 letters long.",
  "The first computer mouse was made of wood.",
  "Some frogs can freeze solid and survive.",
  "The “M” in M&Ms stands for Mars and Murrie.",
  "Caterpillars have 12 eyes.",
  "The shortest commercial flight is 1.7 miles.",
  "The tongue is the only muscle that is not attached at both ends.",
  "Shakespeare invented the word “eyeball.”",
  "A group of porcupines is called a prickle.",
  "The inventor of the microwave appliance got a patent after a candy bar melted in his pocket.",
  "Dolphins have names for each other.",
  "The human nose can detect about one trillion smells.",
  "Some jellyfish are biologically immortal.",
  "A crocodile cannot stick its tongue out.",
  "Scallops have up to 200 eyes.",
  "A bolt of lightning is five times hotter than the sun’s surface.",
  "An ostrich’s eye is bigger than its brain.",
  "Mosquitoes are attracted to the color blue twice as much as red.",
  "The longest recorded flight of a chicken is 13 seconds.",
  "A group of hedgehogs is called a spiny bundle.",
  "The most common letter in English is “e.”",
  "Some metals can be liquid at room temperature, like gallium.",
  "The shortest street in the world is about 5.6 meters long.",
  "Pineapples take about two years to grow.",
  "Bamboo can grow up to 91 cm in a day.",
  "The moon has “moonquakes.”",
  "There’s a species of fish that can climb trees.",
  "The first alarm clock could only ring at 4 a.m.",
  "A group of jellyfish is called a smack.",
  "Kangaroos can’t walk backwards.",
  "Butterflies can taste with their feet.",
  "The longest English word with one vowel is “strengths.”",
  "Some snails sleep for three years.",
  "The fingerprints of a koala are almost identical to human fingerprints.",
  "The average person walks the equivalent of three times around the world in a lifetime.",
  "The world’s smallest reptile was discovered in 2021.",
  "A bolt of lightning can travel 60 miles per second.",
  "The hashtag symbol is technically called an octothorpe.",
  "The tallest sunflower on record is over 30 feet.",
  "There are more than 200 corpses on Mount Everest.",
  "The longest river in the world is the Nile, but the Amazon carries more water.",
  "A hummingbird’s heart can beat over 1,200 times per minute.",
  "An octopus can taste with its arms.",
  "Polar bears have black skin under white fur.",
  "A group of bees is called a swarm, but a group of bunnies is a fluffle.",
  "The smallest bone in your body is in your ear.",
  "The smell of freshly cut grass is a plant distress signal.",
  "Some cats are allergic to humans.",
  "A group of frogs is called an army.",
  "The first domain name ever registered was symbolics.com.",
  "The longest time between two twins’ births is 87 days.",
  "Your brain burns about 20% of your total energy.",
  "A group of giraffes is called a tower.",
  "The Pacific Ocean is larger than all land on Earth combined.",
  "A day on Jupiter is only about 10 hours long.",
  "The smallest country in the world is Vatican City.",
  "A group of kangaroos is called a mob.",
  "Some plants can “hear” running water and grow toward it.",
  "Saturn could float in water because it’s mostly gas.",
  "The average raindrop falls at about 20 mph.",
  "The longest recorded hiccuping spree lasted 68 years.",
  "There are more trees on Earth than stars in the Milky Way.",
  "Tardigrades can survive in outer space.",
  "The first webcam watched a coffee pot.",
  "Cows can sleep standing up, but they dream lying down.",
  "The shortest month name is May.",
  "The longest English word with no repeating letters is “uncopyrightable.”",
];

export default function FunFacts() {
  const [fact, setFact] = useState(facts[0]);
  const [open, setOpen] = useState(false);
  const [pos, setPos] = useState({ x: 20, y: 20 });

  function randomFact() {
    const next = facts[Math.floor(Math.random() * facts.length)];
    setFact(next);
  }

  function moveButton() {
    const maxX = Math.max(8, window.innerWidth - 180);
    const maxY = Math.max(8, window.innerHeight - 120);
    const x = Math.floor(Math.random() * maxX);
    const y = Math.floor(Math.random() * maxY);
    setPos({ x, y });
  }

  useEffect(() => {
    randomFact();
    moveButton();
    const id = setInterval(moveButton, 5200);
    const onResize = () => moveButton();
    window.addEventListener("resize", onResize);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return (
    <>
      <button
        type="button"
        onClick={() => {
          randomFact();
          setOpen(true);
          moveButton();
        }}
        className="fixed z-30 inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#22d3ee] text-lg font-bold text-[#0b1020] shadow-[0_10px_24px_rgba(34,211,238,0.3)] transition hover:opacity-90"
        style={{ left: pos.x, top: pos.y }}
        aria-label="Show a fun fact"
      >
        ?
      </button>

      {open && (
        <div
          className="fixed inset-0 z-40 flex items-center justify-center bg-black/60 px-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="funfact-title"
        >
          <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0f172a] p-6 shadow-[0_30px_80px_rgba(3,7,18,0.6)]">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2
                  id="funfact-title"
                  className="text-lg font-semibold text-white"
                >
                  Fun fact
                </h2>
                <p className="mt-2 text-sm text-slate-300">{fact}</p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close fun fact popup"
                className="rounded-full border border-white/10 bg-white/5 p-2 text-slate-200 transition hover:bg-white/10"
              >
                ✕
              </button>
            </div>
            <div className="mt-5 flex gap-3">
              <button
                type="button"
                onClick={randomFact}
                className="inline-flex h-10 items-center justify-center rounded-full bg-[#22d3ee] px-5 text-xs font-semibold text-[#0b1020] transition hover:opacity-90"
              >
                Another one
              </button>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-10 items-center justify-center rounded-full border border-white/10 bg-white/5 px-5 text-xs font-semibold text-white transition hover:bg-white/10"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
