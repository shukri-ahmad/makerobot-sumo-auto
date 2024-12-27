sumobit.setAllRgbPixelsColor(0xff0000)
sumobit.calibrateEdgeThreshold()
basic.forever(function () {
    if (sumobit.compareEdgeCalibrated(SumobitEdgeSelection.Right) || sumobit.compareEdgeCalibrated(SumobitEdgeSelection.Left)) {
        sumobit.backoff(SumobitDirection.Right, 120)
    } else {
        sumobit.search(SumobitSearch.Normal, 120)
        sumobit.attack(180)
    }
})
