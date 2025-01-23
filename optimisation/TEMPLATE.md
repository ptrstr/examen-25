# Exemple de définition de données

Voici les structures dans quelques langages supportant facilement le JSON.

### Rust

```Rust
#[derive(Deserialize)]
enum WeekDay {
    Mon,
    Tue,
    Wed,
    Thu,
    Fri,
    Sat,
    Sun,
}

#[derive(Deserialize)]
struct Activity {
    week_day: WeekDay,
    start_hour: u8,
    hour_duration: u8,
    money: f64,
    fun: f64,
}

#[derive(Deserialize)]
struct Possibilities(Vec<Activity>);
```

### Python

```python
import json
from enum import Enum
from typing import List

class WeekDay(Enum):
    Mon = "Mon"
    Tue = "Tue"
    Wed = "Wed"
    Thu = "Thu"
    Fri = "Fri"
    Sat = "Sat"
    Sun = "Sun"

class Activity:
    def __init__(self, week_day: WeekDay, start_hour: int, hour_duration: int, money: float, fun: float):
        self.week_day = week_day
        self.start_hour = start_hour
        self.hour_duration = hour_duration
        self.money = money
        self.fun = fun

    @staticmethod
    def deserialize(data: dict):
        return Activity(
            WeekDay(data["week_day"]),
            data["start_hour"],
            data["hour_duration"],
            data["money"],
            data["fun"]
        )

class Possibilities:
    def __init__(self, activities: List[Activity]):
        self.activities = activities

    @staticmethod
    def deserialize(data: dict):
        activities = [Activity.deserialize(item) for item in data["activities"]]
        return Possibilities(activities)
```

### Typescript

```typescript
enum WeekDay {
    Mon = 'Mon',
    Tue = 'Tue',
    Wed = 'Wed',
    Thu = 'Thu',
    Fri = 'Fri',
    Sat = 'Sat',
    Sun = 'Sun'
}

interface Activity {
    week_day: WeekDay;
    start_hour: number;
    hour_duration: number;
    money: number;
    fun: number;
}

interface Possibilities {
    activities: Activity[];
}
```

### Go

```go
package main

import (
    "encoding/json"
    "fmt"
)

type WeekDay string

const (
    Mon WeekDay = "Mon"
    Tue WeekDay = "Tue"
    Wed WeekDay = "Wed"
    Thu WeekDay = "Thu"
    Fri WeekDay = "Fri"
    Sat WeekDay = "Sat"
    Sun WeekDay = "Sun"
)

type Activity struct {
    WeekDay      WeekDay `json:"week_day"`
    StartHour    uint8   `json:"start_hour"`
    HourDuration uint8   `json:"hour_duration"`
    Money        float64 `json:"money"`
    Fun          float64 `json:"fun"`
}

type Possibilities struct {
    Activities []Activity `json:"activities"`
}
```

### C#

```csharp
using System;
using System.Collections.Generic;
using System.Text.Json;
using System.Text.Json.Serialization;

public enum WeekDay
{
    Mon, Tue, Wed, Thu, Fri, Sat, Sun
}

public class Activity
{
    [JsonPropertyName("week_day")]
    public WeekDay WeekDay { get; set; }

    [JsonPropertyName("start_hour")]
    public int StartHour { get; set; }

    [JsonPropertyName("hour_duration")]
    public int HourDuration { get; set; }

    [JsonPropertyName("money")]
    public double Money { get; set; }

    [JsonPropertyName("fun")]
    public double Fun { get; set; }
}

public class Possibilities
{
    [JsonPropertyName("activities")]
    public List<Activity> Activities { get; set; }
}
```

### Swift

```swift
import Foundation

enum WeekDay: String, Codable {
    case Mon, Tue, Wed, Thu, Fri, Sat, Sun
}

struct Activity: Codable {
    var week_day: WeekDay
    var start_hour: Int
    var hour_duration: Int
    var money: Double
    var fun: Double
}

struct Possibilities: Codable {
    var activities: [Activity]
}
```
