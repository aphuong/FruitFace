# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20141120220626) do

  create_table "fruits", force: true do |t|
    t.boolean  "bodyRound"
    t.boolean  "bodyPear"
    t.boolean  "bodyStrawberry"
    t.boolean  "eyesOpen"
    t.boolean  "eyesClosed"
    t.boolean  "mouthSad"
    t.boolean  "mouthHappy"
    t.boolean  "mouthOpen"
    t.boolean  "legs"
    t.boolean  "arms"
    t.boolean  "roundGlasses"
    t.boolean  "freckles"
    t.boolean  "hairLeaf"
    t.boolean  "hairDoubleLeaf"
    t.boolean  "hairShaggy"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "bodyGrape"
    t.boolean  "squareGlasses"
    t.boolean  "mustache"
    t.boolean  "mustache_two"
  end

end
