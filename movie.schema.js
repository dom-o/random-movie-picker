var movieSchema = {
  "definitions": {},
  "$schema": "http://json-schema.org/draft-07/schema#",
  "$id": "http://example.com/root.json",
  "type": "object",
  "title": "The Root Schema",
  "items": {
    "$id": "#/items",
    "type": "object",
    "title": "The Items Schema",
    "required": [
      "title",
      "alternativeTitles",
      "secondaryYearSourceId",
      "sortTitle",
      "sizeOnDisk",
      "status",
      "overview",
      "inCinemas",
      "physicalRelease",
      "images",
      "website",
      "downloaded",
      "year",
      "hasFile",
      "youTubeTrailerId",
      "studio",
      "path",
      "profileId",
      "pathState",
      "monitored",
      "minimumAvailability",
      "isAvailable",
      "folderName",
      "runtime",
      "lastInfoSync",
      "cleanTitle",
      "imdbId",
      "tmdbId",
      "titleSlug",
      "genres",
      "tags",
      "added",
      "ratings",
      "movieFile",
      "qualityProfileId",
      "id"
    ],
    "properties": {
      "title": {
        "$id": "#/items/properties/title",
        "type": "string",
        "title": "The Title Schema",
        "default": "",
        "examples": [
          "Sorry to Bother You"
        ],
        "pattern": "^(.*)$"
      },
      "alternativeTitles": {
        "$id": "#/items/properties/alternativeTitles",
        "type": "array",
        "title": "The Alternativetitles Schema"
      },
      "secondaryYearSourceId": {
        "$id": "#/items/properties/secondaryYearSourceId",
        "type": "integer",
        "title": "The Secondaryyearsourceid Schema",
        "default": 0,
        "examples": [
          0
        ]
      },
      "sortTitle": {
        "$id": "#/items/properties/sortTitle",
        "type": "string",
        "title": "The Sorttitle Schema",
        "default": "",
        "examples": [
          "sorry to bother you"
        ],
        "pattern": "^(.*)$"
      },
      "sizeOnDisk": {
        "$id": "#/items/properties/sizeOnDisk",
        "type": "integer",
        "title": "The Sizeondisk Schema",
        "default": 0,
        "examples": [
          4093966072
        ]
      },
      "status": {
        "$id": "#/items/properties/status",
        "type": "string",
        "title": "The Status Schema",
        "default": "",
        "examples": [
          "released"
        ],
        "pattern": "^(.*)$"
      },
      "overview": {
        "$id": "#/items/properties/overview",
        "type": "string",
        "title": "The Overview Schema",
        "default": "",
        "examples": [
          "In an alternate present-day version of Oakland, black telemarketer Cassius Green discovers a magical key to professional success – which propels him into a macabre universe."
        ],
        "pattern": "^(.*)$"
      },
      "inCinemas": {
        "$id": "#/items/properties/inCinemas",
        "type": "string",
        "title": "The Incinemas Schema",
        "default": "",
        "examples": [
          "2018-07-06T04:00:00Z"
        ],
        "pattern": "^(.*)$"
      },
      "physicalRelease": {
        "$id": "#/items/properties/physicalRelease",
        "type": "string",
        "title": "The Physicalrelease Schema",
        "default": "",
        "examples": [
          "2018-10-23T00:00:00Z"
        ],
        "pattern": "^(.*)$"
      },
      "images": {
        "$id": "#/items/properties/images",
        "type": "array",
        "title": "The Images Schema",
        "items": {
          "$id": "#/items/properties/images/items",
          "type": "object",
          "title": "The Items Schema",
          "required": [
            "coverType",
            "url"
          ],
          "properties": {
            "coverType": {
              "$id": "#/items/properties/images/items/properties/coverType",
              "type": "string",
              "title": "The Covertype Schema",
              "default": "",
              "examples": [
                "poster"
              ],
              "pattern": "^(.*)$"
            },
            "url": {
              "$id": "#/items/properties/images/items/properties/url",
              "type": "string",
              "title": "The Url Schema",
              "default": "",
              "examples": [
                "/MediaCover/1/poster.jpg"
              ],
              "pattern": "^(.*)$"
            }
          }
        }
      },
      "website": {
        "$id": "#/items/properties/website",
        "type": "string",
        "title": "The Website Schema",
        "default": "",
        "examples": [
          "http://sorrytobotheryou.movie"
        ],
        "pattern": "^(.*)$"
      },
      "downloaded": {
        "$id": "#/items/properties/downloaded",
        "type": "boolean",
        "title": "The Downloaded Schema",
        "default": false,
        "examples": [
          true
        ]
      },
      "year": {
        "$id": "#/items/properties/year",
        "type": "integer",
        "title": "The Year Schema",
        "default": 0,
        "examples": [
          2018
        ]
      },
      "hasFile": {
        "$id": "#/items/properties/hasFile",
        "type": "boolean",
        "title": "The Hasfile Schema",
        "default": false,
        "examples": [
          true
        ]
      },
      "youTubeTrailerId": {
        "$id": "#/items/properties/youTubeTrailerId",
        "type": "string",
        "title": "The Youtubetrailerid Schema",
        "default": "",
        "examples": [
          "enH3xA4mYcY"
        ],
        "pattern": "^(.*)$"
      },
      "studio": {
        "$id": "#/items/properties/studio",
        "type": "string",
        "title": "The Studio Schema",
        "default": "",
        "examples": [
          "Cinereach"
        ],
        "pattern": "^(.*)$"
      },
      "path": {
        "$id": "#/items/properties/path",
        "type": "string",
        "title": "The Path Schema",
        "default": "",
        "examples": [
          "/media/domonic/Seagate Backup Plus Drive/Videos/Sorry to Bother You (2018)"
        ],
        "pattern": "^(.*)$"
      },
      "profileId": {
        "$id": "#/items/properties/profileId",
        "type": "integer",
        "title": "The Profileid Schema",
        "default": 0,
        "examples": [
          6
        ]
      },
      "pathState": {
        "$id": "#/items/properties/pathState",
        "type": "string",
        "title": "The Pathstate Schema",
        "default": "",
        "examples": [
          "static"
        ],
        "pattern": "^(.*)$"
      },
      "monitored": {
        "$id": "#/items/properties/monitored",
        "type": "boolean",
        "title": "The Monitored Schema",
        "default": false,
        "examples": [
          true
        ]
      },
      "minimumAvailability": {
        "$id": "#/items/properties/minimumAvailability",
        "type": "string",
        "title": "The Minimumavailability Schema",
        "default": "",
        "examples": [
          "announced"
        ],
        "pattern": "^(.*)$"
      },
      "isAvailable": {
        "$id": "#/items/properties/isAvailable",
        "type": "boolean",
        "title": "The Isavailable Schema",
        "default": false,
        "examples": [
          true
        ]
      },
      "folderName": {
        "$id": "#/items/properties/folderName",
        "type": "string",
        "title": "The Foldername Schema",
        "default": "",
        "examples": [
          "/media/domonic/Seagate Backup Plus Drive/Videos/Sorry to Bother You (2018)"
        ],
        "pattern": "^(.*)$"
      },
      "runtime": {
        "$id": "#/items/properties/runtime",
        "type": "integer",
        "title": "The Runtime Schema",
        "default": 0,
        "examples": [
          105
        ]
      },
      "lastInfoSync": {
        "$id": "#/items/properties/lastInfoSync",
        "type": "string",
        "title": "The Lastinfosync Schema",
        "default": "",
        "examples": [
          "2019-04-23T19:27:37.691273Z"
        ],
        "pattern": "^(.*)$"
      },
      "cleanTitle": {
        "$id": "#/items/properties/cleanTitle",
        "type": "string",
        "title": "The Cleantitle Schema",
        "default": "",
        "examples": [
          "sorrytobotheryou"
        ],
        "pattern": "^(.*)$"
      },
      "imdbId": {
        "$id": "#/items/properties/imdbId",
        "type": "string",
        "title": "The Imdbid Schema",
        "default": "",
        "examples": [
          "tt5688932"
        ],
        "pattern": "^(.*)$"
      },
      "tmdbId": {
        "$id": "#/items/properties/tmdbId",
        "type": "integer",
        "title": "The Tmdbid Schema",
        "default": 0,
        "examples": [
          424781
        ]
      },
      "titleSlug": {
        "$id": "#/items/properties/titleSlug",
        "type": "string",
        "title": "The Titleslug Schema",
        "default": "",
        "examples": [
          "sorry-to-bother-you-424781"
        ],
        "pattern": "^(.*)$"
      },
      "genres": {
        "$id": "#/items/properties/genres",
        "type": "array",
        "title": "The Genres Schema"
      },
      "tags": {
        "$id": "#/items/properties/tags",
        "type": "array",
        "title": "The Tags Schema"
      },
      "added": {
        "$id": "#/items/properties/added",
        "type": "string",
        "title": "The Added Schema",
        "default": "",
        "examples": [
          "2018-10-08T14:11:40.363355Z"
        ],
        "pattern": "^(.*)$"
      },
      "ratings": {
        "$id": "#/items/properties/ratings",
        "type": "object",
        "title": "The Ratings Schema",
        "required": [
          "votes",
          "value"
        ],
        "properties": {
          "votes": {
            "$id": "#/items/properties/ratings/properties/votes",
            "type": "integer",
            "title": "The Votes Schema",
            "default": 0,
            "examples": [
              426
            ]
          },
          "value": {
            "$id": "#/items/properties/ratings/properties/value",
            "type": "integer",
            "title": "The Value Schema",
            "default": 0,
            "examples": [
              7
            ]
          }
        }
      },
      "movieFile": {
        "$id": "#/items/properties/movieFile",
        "type": "object",
        "title": "The Moviefile Schema",
        "required": [
          "movieId",
          "relativePath",
          "size",
          "dateAdded",
          "quality",
          "edition",
          "mediaInfo",
          "id"
        ],
        "properties": {
          "movieId": {
            "$id": "#/items/properties/movieFile/properties/movieId",
            "type": "integer",
            "title": "The Movieid Schema",
            "default": 0,
            "examples": [
              0
            ]
          },
          "relativePath": {
            "$id": "#/items/properties/movieFile/properties/relativePath",
            "type": "string",
            "title": "The Relativepath Schema",
            "default": "",
            "examples": [
              "Sorry to Bother You 2018 WEBDL-1080p.mkv"
            ],
            "pattern": "^(.*)$"
          },
          "size": {
            "$id": "#/items/properties/movieFile/properties/size",
            "type": "integer",
            "title": "The Size Schema",
            "default": 0,
            "examples": [
              4093966072
            ]
          },
          "dateAdded": {
            "$id": "#/items/properties/movieFile/properties/dateAdded",
            "type": "string",
            "title": "The Dateadded Schema",
            "default": "",
            "examples": [
              "2018-11-08T01:44:14.892249Z"
            ],
            "pattern": "^(.*)$"
          },
          "quality": {
            "$id": "#/items/properties/movieFile/properties/quality",
            "type": "object",
            "title": "The Quality Schema",
            "required": [
              "quality",
              "customFormats",
              "revision"
            ],
            "properties": {
              "quality": {
                "$id": "#/items/properties/movieFile/properties/quality/properties/quality",
                "type": "object",
                "title": "The Quality Schema",
                "required": [
                  "id",
                  "name",
                  "source",
                  "resolution",
                  "modifier"
                ],
                "properties": {
                  "id": {
                    "$id": "#/items/properties/movieFile/properties/quality/properties/quality/properties/id",
                    "type": "integer",
                    "title": "The Id Schema",
                    "default": 0,
                    "examples": [
                      3
                    ]
                  },
                  "name": {
                    "$id": "#/items/properties/movieFile/properties/quality/properties/quality/properties/name",
                    "type": "string",
                    "title": "The Name Schema",
                    "default": "",
                    "examples": [
                      "WEBDL-1080p"
                    ],
                    "pattern": "^(.*)$"
                  },
                  "source": {
                    "$id": "#/items/properties/movieFile/properties/quality/properties/quality/properties/source",
                    "type": "string",
                    "title": "The Source Schema",
                    "default": "",
                    "examples": [
                      "webdl"
                    ],
                    "pattern": "^(.*)$"
                  },
                  "resolution": {
                    "$id": "#/items/properties/movieFile/properties/quality/properties/quality/properties/resolution",
                    "type": "string",
                    "title": "The Resolution Schema",
                    "default": "",
                    "examples": [
                      "r1080P"
                    ],
                    "pattern": "^(.*)$"
                  },
                  "modifier": {
                    "$id": "#/items/properties/movieFile/properties/quality/properties/quality/properties/modifier",
                    "type": "string",
                    "title": "The Modifier Schema",
                    "default": "",
                    "examples": [
                      "none"
                    ],
                    "pattern": "^(.*)$"
                  }
                }
              },
              "customFormats": {
                "$id": "#/items/properties/movieFile/properties/quality/properties/customFormats",
                "type": "array",
                "title": "The Customformats Schema"
              },
              "revision": {
                "$id": "#/items/properties/movieFile/properties/quality/properties/revision",
                "type": "object",
                "title": "The Revision Schema",
                "required": [
                  "version",
                  "real"
                ],
                "properties": {
                  "version": {
                    "$id": "#/items/properties/movieFile/properties/quality/properties/revision/properties/version",
                    "type": "integer",
                    "title": "The Version Schema",
                    "default": 0,
                    "examples": [
                      1
                    ]
                  },
                  "real": {
                    "$id": "#/items/properties/movieFile/properties/quality/properties/revision/properties/real",
                    "type": "integer",
                    "title": "The Real Schema",
                    "default": 0,
                    "examples": [
                      0
                    ]
                  }
                }
              }
            }
          },
          "edition": {
            "$id": "#/items/properties/movieFile/properties/edition",
            "type": "string",
            "title": "The Edition Schema",
            "default": "",
            "examples": [
              ""
            ],
            "pattern": "^(.*)$"
          },
          "mediaInfo": {
            "$id": "#/items/properties/movieFile/properties/mediaInfo",
            "type": "object",
            "title": "The Mediainfo Schema",
            "required": [
              "containerFormat",
              "videoFormat",
              "videoCodecID",
              "videoProfile",
              "videoCodecLibrary",
              "videoBitrate",
              "videoBitDepth",
              "videoMultiViewCount",
              "videoColourPrimaries",
              "videoTransferCharacteristics",
              "width",
              "height",
              "audioFormat",
              "audioCodecID",
              "audioCodecLibrary",
              "audioAdditionalFeatures",
              "audioBitrate",
              "runTime",
              "audioStreamCount",
              "audioChannels",
              "audioChannelPositions",
              "audioChannelPositionsText",
              "audioProfile",
              "videoFps",
              "audioLanguages",
              "subtitles",
              "scanType",
              "schemaRevision"
            ],
            "properties": {
              "containerFormat": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/containerFormat",
                "type": "string",
                "title": "The Containerformat Schema",
                "default": "",
                "examples": [
                  "Matroska"
                ],
                "pattern": "^(.*)$"
              },
              "videoFormat": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/videoFormat",
                "type": "string",
                "title": "The Videoformat Schema",
                "default": "",
                "examples": [
                  "AVC"
                ],
                "pattern": "^(.*)$"
              },
              "videoCodecID": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/videoCodecID",
                "type": "string",
                "title": "The Videocodecid Schema",
                "default": "",
                "examples": [
                  "V_MPEG4/ISO/AVC"
                ],
                "pattern": "^(.*)$"
              },
              "videoProfile": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/videoProfile",
                "type": "string",
                "title": "The Videoprofile Schema",
                "default": "",
                "examples": [
                  "High@L4"
                ],
                "pattern": "^(.*)$"
              },
              "videoCodecLibrary": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/videoCodecLibrary",
                "type": "string",
                "title": "The Videocodeclibrary Schema",
                "default": "",
                "examples": [
                  ""
                ],
                "pattern": "^(.*)$"
              },
              "videoBitrate": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/videoBitrate",
                "type": "integer",
                "title": "The Videobitrate Schema",
                "default": 0,
                "examples": [
                  4530433
                ]
              },
              "videoBitDepth": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/videoBitDepth",
                "type": "integer",
                "title": "The Videobitdepth Schema",
                "default": 0,
                "examples": [
                  8
                ]
              },
              "videoMultiViewCount": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/videoMultiViewCount",
                "type": "integer",
                "title": "The Videomultiviewcount Schema",
                "default": 0,
                "examples": [
                  0
                ]
              },
              "videoColourPrimaries": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/videoColourPrimaries",
                "type": "string",
                "title": "The Videocolourprimaries Schema",
                "default": "",
                "examples": [
                  "BT.709"
                ],
                "pattern": "^(.*)$"
              },
              "videoTransferCharacteristics": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/videoTransferCharacteristics",
                "type": "string",
                "title": "The Videotransfercharacteristics Schema",
                "default": "",
                "examples": [
                  "BT.709"
                ],
                "pattern": "^(.*)$"
              },
              "width": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/width",
                "type": "integer",
                "title": "The Width Schema",
                "default": 0,
                "examples": [
                  1920
                ]
              },
              "height": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/height",
                "type": "integer",
                "title": "The Height Schema",
                "default": 0,
                "examples": [
                  802
                ]
              },
              "audioFormat": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/audioFormat",
                "type": "string",
                "title": "The Audioformat Schema",
                "default": "",
                "examples": [
                  "AC-3"
                ],
                "pattern": "^(.*)$"
              },
              "audioCodecID": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/audioCodecID",
                "type": "string",
                "title": "The Audiocodecid Schema",
                "default": "",
                "examples": [
                  "A_AC3"
                ],
                "pattern": "^(.*)$"
              },
              "audioCodecLibrary": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/audioCodecLibrary",
                "type": "string",
                "title": "The Audiocodeclibrary Schema",
                "default": "",
                "examples": [
                  ""
                ],
                "pattern": "^(.*)$"
              },
              "audioAdditionalFeatures": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/audioAdditionalFeatures",
                "type": "string",
                "title": "The Audioadditionalfeatures Schema",
                "default": "",
                "examples": [
                  ""
                ],
                "pattern": "^(.*)$"
              },
              "audioBitrate": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/audioBitrate",
                "type": "integer",
                "title": "The Audiobitrate Schema",
                "default": 0,
                "examples": [
                  384000
                ]
              },
              "runTime": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/runTime",
                "type": "string",
                "title": "The Runtime Schema",
                "default": "",
                "examples": [
                  "01:51:01.9520000"
                ],
                "pattern": "^(.*)$"
              },
              "audioStreamCount": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/audioStreamCount",
                "type": "integer",
                "title": "The Audiostreamcount Schema",
                "default": 0,
                "examples": [
                  1
                ]
              },
              "audioChannels": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/audioChannels",
                "type": "integer",
                "title": "The Audiochannels Schema",
                "default": 0,
                "examples": [
                  6
                ]
              },
              "audioChannelPositions": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/audioChannelPositions",
                "type": "string",
                "title": "The Audiochannelpositions Schema",
                "default": "",
                "examples": [
                  "3/2/0.1"
                ],
                "pattern": "^(.*)$"
              },
              "audioChannelPositionsText": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/audioChannelPositionsText",
                "type": "string",
                "title": "The Audiochannelpositionstext Schema",
                "default": "",
                "examples": [
                  "Front: L C R, Side: L R, LFE"
                ],
                "pattern": "^(.*)$"
              },
              "audioProfile": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/audioProfile",
                "type": "string",
                "title": "The Audioprofile Schema",
                "default": "",
                "examples": [
                  ""
                ],
                "pattern": "^(.*)$"
              },
              "videoFps": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/videoFps",
                "type": "number",
                "title": "The Videofps Schema",
                "default": 0.0,
                "examples": [
                  23.976
                ]
              },
              "audioLanguages": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/audioLanguages",
                "type": "string",
                "title": "The Audiolanguages Schema",
                "default": "",
                "examples": [
                  "English"
                ],
                "pattern": "^(.*)$"
              },
              "subtitles": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/subtitles",
                "type": "string",
                "title": "The Subtitles Schema",
                "default": "",
                "examples": [
                  ""
                ],
                "pattern": "^(.*)$"
              },
              "scanType": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/scanType",
                "type": "string",
                "title": "The Scantype Schema",
                "default": "",
                "examples": [
                  "Progressive"
                ],
                "pattern": "^(.*)$"
              },
              "schemaRevision": {
                "$id": "#/items/properties/movieFile/properties/mediaInfo/properties/schemaRevision",
                "type": "integer",
                "title": "The Schemarevision Schema",
                "default": 0,
                "examples": [
                  5
                ]
              }
            }
          },
          "id": {
            "$id": "#/items/properties/movieFile/properties/id",
            "type": "integer",
            "title": "The Id Schema",
            "default": 0,
            "examples": [
              202
            ]
          }
        }
      },
      "qualityProfileId": {
        "$id": "#/items/properties/qualityProfileId",
        "type": "integer",
        "title": "The Qualityprofileid Schema",
        "default": 0,
        "examples": [
          6
        ]
      },
      "id": {
        "$id": "#/items/properties/id",
        "type": "integer",
        "title": "The Id Schema",
        "default": 0,
        "examples": [
          1
        ]
      }
    }
  }
};
