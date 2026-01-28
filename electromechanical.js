// Electromechanical
// Xar0c - 2026

let chords = chord("<Fm9 ~ Ebm7 ~>")
stack(
  chords.voicing().s("gm_lead_4_chiff")
  .adsr(".9:.5:.5:2").room(1).phaser("2")
  .sometimes(x=>x.phaser("4"))
  .pan("[0.25, 0.75]")
  .mask("<[1 0] [1 1] [0 1] 0>/16")
  ,
  stack(
    s("brown").struct("<~ x ~ ~ [~ x] [~ x] ~ ~>"),
    s("bassdrum1").struct("<~ x ~ ~ [~ x] [~ x] ~ ~>").gain(2),
    s("white").struct("<~ x x ~ [x x] [x x] [~ x] ~>").gain("<2 4 1 2>*2")
  ).fast(2).clip(0.1).crush(8).lpf(500)
  ,
  chords.n("<2 4 -1 1>/2")
  .anchor("D3").voicing().s("sawtooth")
  .attack(.3).release(1).lpf("500")
  ,
  s("<psaltery_pluck ~>")
  .phaser(10).speed("1")
  .off(1, x=>x.attack(1)).room(3).crush(10)
  .pan("<0.25 0.75>/2").gain(0.6),
  chords.n("<2 4 -1 1>/2").late("0.5")
  .anchor("D5").clip("< 1 2 1 >")
  .attack("1").decay("0.2").sustain("0.8")
  .vowel("e").release("1.5").voicing()
  .s("gm_voice_oohs").gain(4)
  .mask("<[1 0] 0 1 0>/16")
  ,
  note("D4").struct("<~ x*<8 16>~ [x x]*2 ~>")
  .sound("sawtooth")
  .vowel("<a e>*<2 1>")
  .rarely(x=>x.degradeBy(0.2).clip(0.05))
  .clip(0.15).release(0.1).room(1)
  .fast(2).gain("3")
  .mask("<[0 1] 1 0 1>/16")
).scope()
